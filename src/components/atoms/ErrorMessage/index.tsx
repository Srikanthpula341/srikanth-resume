'use client';

import React from 'react';
import { TEXT } from '@/constants/text';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="text-center p-4">
      <h2 className="text-xl text-red-500 mb-2">{TEXT.ERROR.TITLE}</h2>
      <p className="text-gray-300">{message}</p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
      >
        {TEXT.ERROR.TRY_AGAIN}
      </button>
    </div>
  );
};

export default ErrorMessage; 