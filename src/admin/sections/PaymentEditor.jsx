import React from 'react';
import SectionEditor from '../SectionEditor.jsx';

const fields = [
  { key: 'title', label: 'Main Page Title' },
  { key: 'subtitle', label: 'Main Page Subtitle' },
  { key: 'amount', label: 'Label: Payment Amount' },
  { key: 'total', label: 'Label: Total to Pay' },
  { key: 'secureConnection', label: 'Secure Badge Text' },
  
  // PayPal
  { key: 'paypal_title', label: 'PayPal - Title' },
  { key: 'paypal_desc', label: 'PayPal - Description' },
  { key: 'paypal_panelTitle', label: 'PayPal - Panel Title' },
  { key: 'paypal_emailLabel', label: 'PayPal - Email Label' },
  { key: 'paypal_emailValue', label: 'PayPal - Email Value (Your Details)' },
  { key: 'paypal_confirmBtn', label: 'PayPal - Confirm Button Text' },

  // Payoneer
  { key: 'payoneer_title', label: 'Payoneer - Title' },
  { key: 'payoneer_desc', label: 'Payoneer - Description' },
  { key: 'payoneer_panelTitle', label: 'Payoneer - Panel Title' },
  { key: 'payoneer_idLabel', label: 'Payoneer - ID Label' },
  { key: 'payoneer_idValue', label: 'Payoneer - ID Value (Your Details)' },
  { key: 'payoneer_confirmBtn', label: 'Payoneer - Confirm Button Text' },

  // UPI
  { key: 'upi_title', label: 'UPI - Title' },
  { key: 'upi_desc', label: 'UPI - Description' },
  { key: 'upi_panelTitle', label: 'UPI - Panel Title' },
  { key: 'upi_idLabel', label: 'UPI - ID Label' },
  { key: 'upi_idValue', label: 'UPI - ID Value (Your Details)' },
  { key: 'upi_confirmBtn', label: 'UPI - Confirm Button Text' },

  // Bank
  { key: 'bank_title', label: 'Bank - Title' },
  { key: 'bank_desc', label: 'Bank - Description' },
  { key: 'bank_panelTitleHdfc', label: 'Bank - HDFC Panel Title' },
  { key: 'bank_panelTitleDeutsche', label: 'Bank - Deutsche Panel Title' },
  { key: 'bank_hdfcTab', label: 'Bank - HDFC Tab Name' },
  { key: 'bank_deutscheTab', label: 'Bank - Deutsche Tab Name' },
  { key: 'bank_accHolder', label: 'Bank - Account Holder Label' },
  { key: 'bank_accHolderHdfc', label: 'Bank - HDFC Account Holder Name' },
  { key: 'bank_accHolderDeutsche', label: 'Bank - Deutsche Account Holder Name' },
  { key: 'bank_accNumber', label: 'Bank - Account Number Label' },
  { key: 'bank_accNumberHdfc', label: 'Bank - HDFC Account Number' },
  { key: 'bank_accNumberDeutsche', label: 'Bank - Deutsche Account Number' },
  { key: 'bank_bankName', label: 'Bank - Bank Name Label' },
  { key: 'bank_bankNameHdfc', label: 'Bank - HDFC Bank Name Value' },
  { key: 'bank_bankNameDeutsche', label: 'Bank - Deutsche Bank Name Value' },
  { key: 'bank_ifscSwift', label: 'Bank - IFSC/SWIFT Label' },
  { key: 'bank_ifscSwiftHdfc', label: 'Bank - HDFC IFSC Code' },
  { key: 'bank_ifscSwiftDeutsche', label: 'Bank - Deutsche SWIFT Code' },
  { key: 'bank_confirmHdfcBtn', label: 'Bank - Confirm HDFC Button Text' },
  { key: 'bank_confirmDeutscheBtn', label: 'Bank - Confirm Deutsche Button Text' }
];

export default function PaymentEditor() {
  return (
    <SectionEditor
      section="payment"
      title="Payment Methods Section"
      description="Edit the text and your personal payment details for all languages on the Payment Methods page."
      fields={fields}
    />
  );
}
