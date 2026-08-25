import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { resources as i18nFallback } from '../i18n';

const SiteContentContext = createContext(null);

const EMPTY_LISTS = { reviews: [], workItems: [], certifications: [], skills: [] };

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${url}`);
  return res.json();
}

export function SiteContentProvider({ children }) {
  const [textContent, setTextContent] = useState(null); // section -> key -> {en, mr, hi, de}
  const [lists, setLists] = useState(EMPTY_LISTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [siteContent, reviews, workItems, certifications, skills] = await Promise.all([
        fetchJson('/api/site-content'),
        fetchJson('/api/reviews'),
        fetchJson('/api/work-items'),
        fetchJson('/api/certifications'),
        fetchJson('/api/skills'),
      ]);
      setTextContent(siteContent);
      setLists({ reviews, workItems, certifications, skills });
    } catch (err) {
      // API unreachable or DB not yet seeded — the app still renders using
      // the bundled i18n text; list sections will simply appear empty.
      console.warn('Falling back to bundled content:', err.message);
      setTextContent(null);
      setLists(EMPTY_LISTS);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const value = useMemo(
    () => ({ textContent, lists, loading, error, reload: loadAll }),
    [textContent, lists, loading, error, loadAll]
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error('useSiteContent must be used within SiteContentProvider');
  return ctx;
}

// Drop-in replacement for react-i18next's t() that prefers DB content and
// falls back to the bundled i18n resources (src/i18n.js) when the API
// hasn't returned data for a key yet (e.g. before the DB is seeded).
export function useContent() {
  const { i18n } = useTranslation();
  const { textContent } = useSiteContent();
  const lang = (i18n.language || 'en').split('-')[0];
  const fallbackLang = i18nFallback[lang] ? lang : 'en';

  return useCallback(
    (path) => {
      const [section, key] = path.split('.');
      const dbValue = textContent?.[section]?.[key]?.[lang];
      if (dbValue) return dbValue;

      const fallbackValue = i18nFallback[fallbackLang]?.translation?.[section]?.[key];
      return fallbackValue ?? path;
    },
    [textContent, lang, fallbackLang]
  );
}
