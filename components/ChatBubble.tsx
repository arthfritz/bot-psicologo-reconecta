import React from 'react';
import { Message, Sender } from '../types';
import { BotAvatar } from './icons/BotIcon';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.sender === Sender.USER;

  if (isUser) {
    return (
      <div className="flex justify-end gap-2 my-2">
        <div className="bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-2xl p-3 max-w-sm md:max-w-md lg:max-w-lg shadow-md">
          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 my-2">
      <BotAvatar />
      <div className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl p-3 max-w-sm md:max-w-md lg:max-w-lg shadow-md border border-slate-200 dark:border-slate-600">
        <p className="text-sm whitespace-pre-wrap">{message.text || '...'}</p>
      </div>
    </div>
  );
};

export default ChatBubble;