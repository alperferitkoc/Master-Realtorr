import React from 'react';
import { motion } from 'framer-motion';

interface MockBrowserProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export const MockBrowser: React.FC<MockBrowserProps> = ({ url, children, className }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className={`w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col ${className}`}>
      <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-brand-yellow" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 font-mono truncate shadow-sm border border-gray-200">{url}</div>
      </div>
      <div className="relative flex-1 bg-white overflow-hidden">{children}</div>
    </motion.div>
  );
};