"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-xs text-parchment/40 hover:text-gold-accent transition-colors w-fit"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied to clipboard" : "Copy email address"}
    </button>
  )
}