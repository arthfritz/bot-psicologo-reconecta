import React from 'react';
import { BotAvatar } from './icons/BotIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <BotAvatar />
        <div>
          <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">ReConecta</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Seu guia para o bem-estar e a reconexão</p>
        </div>
      </div>
    </header>
  );
};

export default Header;