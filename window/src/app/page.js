'use client';
import { useState } from 'react';
function Modal({ title, description, isOpen, onClose, onAgree }) {
  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <button 
          onClick={onAgree} 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Погодитися
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAgree = () => {
   
    setIsOpen(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Відкрити модальне вікно
      </button>

      <Modal 
        title="Заголовок модальноvго вікна"
        description="Інформація"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAgree={handleAgree}
      />
    </div>
  );
}



