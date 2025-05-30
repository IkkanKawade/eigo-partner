import React from 'react';
import { Message } from '../types';

interface Props {
  message: Message;
}

const ChatMessageItem: React.FC<Props> = ({ message }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md mb-2 ${message.sender === 'ai' ? 'bg-blue-100' : 'bg-green-100'}`}>
      <p className="text-sm text-gray-800">{message.text}</p>
    </div>
  );
};

export default ChatMessageItem;
