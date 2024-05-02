'use client';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IoIosCopy, IoMdCheckmark } from 'react-icons/io';

const CopyButton = ({ code }: { code: any }) => {
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
      <button
        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-md bg-slate-700 hover:bg-slate-600"
        onMouseLeave={() =>
          setTimeout(() => {
            setCopied(false);
          }, 1500)
        }
      >
        {copied ? (
          <IoMdCheckmark className="h-3 w-3 text-white" />
        ) : (
          <IoIosCopy className="h-3 w-3 text-white" />
        )}
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
