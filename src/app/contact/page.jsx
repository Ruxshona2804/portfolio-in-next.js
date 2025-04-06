'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e)  => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      alert('Спасибо за сообщение! Я скоро с вами свяжусь.');
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-600 to-gray-50 text-white px-4 py-20 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-violet-400 to-indigo-400">
            Свяжитесь со мной
          </h1>
          <p className="mt-4 text-gray-300">
            У вас есть проект или идея? Напишите — я открыта к новым возможностям и коллаборациям.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl space-y-6"
        >
          {/* Имя */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Ваше имя</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Введите имя"
              className="w-full px-4 py-3 rounded-xl bg-gray-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Ваш Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Сообщение */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Сообщение</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Напишите своё сообщение здесь..."
              className="w-full px-4 py-3 rounded-xl bg-gray-700/60 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Кнопка отправки */}
          <div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition text-white font-semibold rounded-xl shadow-md disabled:opacity-50"
            >
              {isSending ? 'Отправляется...' : 'Отправить сообщение'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
