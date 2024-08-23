"use client"

import { useState } from "react";
import { EmailIcon } from "./ui/icons";

interface IconProps {
  color?: string;
  width?: string;
  text: string;
}

export default function CopyButton({ color, width, text }: IconProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  };

  return (
    <>
      <button onClick={copyToClipboard}>
        <EmailIcon color={color} width={width} />
      </button>
      {copied && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md">
          Text copied to clipboard!
        </div>
      )}
    </>

  )
}