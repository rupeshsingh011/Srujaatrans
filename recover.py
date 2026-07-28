import json
import os
import re

transcript_path = r"C:\Users\Rup\.gemini\antigravity-ide\brain\d3b1511e-67c6-4f68-a7f6-6c5879607207\.system_generated\logs\transcript_full.jsonl"
dest_dir = r"c:\Users\Rup\OneDrive\Desktop\Srujaa\worq-portfolio"

files = {}

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
        except:
            continue
            
        if "tool_calls" in data and data["tool_calls"]:
            for call in data["tool_calls"]:
                if call.get("name") == "write_to_file":
                    args = call.get("args", {})
                    path = args.get("TargetFile", "")
                    content = args.get("CodeContent", "")
                    if path and "worq-portfolio" in path:
                        files[path] = content
                elif call.get("name") == "replace_file_content":
                    args = call.get("args", {})
                    path = args.get("TargetFile", "")
                    rep = args.get("ReplacementContent", "")
                    tar = args.get("TargetContent", "")
                    if path and path in files:
                        files[path] = files[path].replace(tar, rep)
                elif call.get("name") == "multi_replace_file_content":
                    args = call.get("args", {})
                    path = args.get("TargetFile", "")
                    chunks = args.get("ReplacementChunks", [])
                    if path and path in files:
                        for chunk in chunks:
                            rep = chunk.get("ReplacementContent", "")
                            tar = chunk.get("TargetContent", "")
                            files[path] = files[path].replace(tar, rep)

for path, content in files.items():
    print(f"Recovering {path}")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
