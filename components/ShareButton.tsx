'use client';

import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';
import { sound } from '../lib/sound';

interface ShareButtonProps {
  url: string;
}

export default function ShareButton({ url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      sound.playPop();
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition"
      title="Copy Link to Clipboard"
      type="button"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-emerald-400 font-bold">Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5 text-amber-400" />
          <span>Copy Link</span>
        </>
      )}
    </button>
  );
}
