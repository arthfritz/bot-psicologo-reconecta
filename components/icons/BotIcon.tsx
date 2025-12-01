import React from 'react';

const BotIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      fillRule="evenodd"
      d="M4.5 12a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

export const BotAvatar: React.FC = () => {
    return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0 shadow-md">
            <span className="text-xl font-bold text-white font-sans">R</span>
        </div>
    );
}

export default BotIcon;