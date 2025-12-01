import React, { useState } from 'react';
import SendIcon from './icons/SendIcon';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 sticky bottom-0 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Digite sua mensagem aqui..."
            className="flex-1 p-3 border border-slate-300 dark:border-slate-600 rounded-2xl resize-none focus:ring-2 focus:ring-violet-500 focus:outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-shadow duration-200"
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-violet-600 text-white p-3 rounded-full disabled:bg-violet-300 dark:disabled:bg-violet-800 disabled:cursor-not-allowed hover:bg-violet-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            aria-label="Enviar mensagem"
          >
            <SendIcon className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;