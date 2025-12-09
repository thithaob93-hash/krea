import React from 'react';
import { Home, Image as ImageIcon, Video, PenTool, Type, Folder } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-100 bg-white/80 px-4 backdrop-blur-md lg:px-6">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xl">
             <span className="transform -translate-y-0.5">K</span>
            </div>
        </div>
        
        {/* Breadcrumbs */}
        <nav className="hidden text-sm font-medium text-gray-500 md:flex items-center gap-2">
            <span>Krea</span>
            <span className="text-gray-300">/</span>
            <span>Apps</span>
            <span className="text-gray-300">/</span>
            <span>Edit</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900">Text Remover</span>
        </nav>
      </div>

      {/* Center Nav */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 transform rounded-xl bg-gray-100/50 p-1 md:flex">
        <button className="rounded-lg p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors">
            <Home size={18} />
        </button>
        <button className="rounded-lg p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors">
            <ImageIcon size={18} />
        </button>
        <button className="rounded-lg p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors">
            <Video size={18} />
        </button>
        <button className="rounded-lg p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors">
            <PenTool size={18} />
        </button>
         <button className="rounded-lg bg-white p-2 text-gray-900 shadow-sm transition-colors">
            <PenTool className="rotate-180" size={18} />
        </button>
        <button className="rounded-lg p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors">
            <Type size={18} />
        </button>
        <button className="rounded-lg p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors">
            <Folder size={18} />
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 md:block">
            Pricing
        </button>
        <button className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 md:block">
            Log In
        </button>
        <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-blue-700">
            Sign Up
        </button>
      </div>
    </header>
  );
};