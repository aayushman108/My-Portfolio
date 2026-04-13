"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  headerRight?: ReactNode;
  children: ReactNode;
  maxWidth?: string;
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  headerRight, 
  children, 
  maxWidth = "max-w-3xl" 
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-6" 
      style={{ zIndex: 9999 }}
      onClick={(e) => { 
        e.stopPropagation(); 
        onClose(); 
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
      />
      
      {/* Modal Container */}
      <div 
        className={`relative w-full ${maxWidth} bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200 border border-gray-200 dark:border-zinc-800`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || headerRight || subtitle) && (
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50">
            <div>
              <div className="flex items-center gap-3 mb-1">
                {title && (
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                )}
                {headerRight}
              </div>
              {subtitle && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 transition-colors cursor-pointer"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="p-5 md:p-6 overflow-y-auto custom-scrollbar flex-1" data-lenis-prevent="true">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
