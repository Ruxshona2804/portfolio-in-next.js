'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const allProjects = [
  {
    title: 'Интернет-магазин',
    description: 'Адаптивный e-commerce сайт с корзиной и фильтрами.',
    tech: ['Vite', 'API', 'Tailwind'],
    github: 'https://github.com/Ruxshona2804/card-products.git',
    demo: 'https://card-products-clrp.vercel.app/',
  },
  {
    title: 'Блог-платформа',
    description: 'Платформа для блогов с авторизацией.',
    tech: ['Next.js', 'API', 'Tailwind CSS'],
    github: 'https://github.com/Ruxshona2804/first-next.electronics.git',
    demo: 'https://first-next-electronics-hxkr.vercel.app/',
  },
  {
    title: 'Landing Page',
    description: 'Минималистичный сайт для бренда.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ruxshona2804/list-products.git',
    demo: 'https://list-products-n2dy.vercel.app/',
  },
  {
    title: 'ToDo App',
    description: 'Простое приложение для задач.',
    tech: ['React', 'LocalStorage', 'CSS'],
    github: 'https://github.com/Ruxshona2804/my_first_react_app.git',
    demo: 'https://my-first-react-app-pp7u.vercel.app/',
  },
  {
    title: 'My portfolio ',
    description: 'Погода с API и геолокацией.',
    tech: [ 'SASS', 'HTML'],
    github: 'https://github.com/Ruxshona2804/my-portfiloi-1.git',
    demo: 'https://my-portfiloi-1-q8oh.vercel.app/',
  },
];

const techList = ['Все', 'React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind'];

export default function PortfolioPage() {
  const [selectedTech, setSelectedTech] = useState('Все');
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects = selectedTech === 'Все'
    ? allProjects
    : allProjects.filter(p => p.tech.includes(selectedTech));

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black px-6 py-24 text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-violet-400 to-indigo-400 drop-shadow-lg">
            Портфолио
          </h1>
          <p className="mt-4 text-gray-300">Мои последние проекты и работы</p>
        </div>

        {/* Фильтр */}
        <div className="flex flex-wrap justify-center gap-4">
          {techList.map((tech) => (
            <button
              key={tech}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                selectedTech === tech
                  ? 'bg-rose-500 text-white border-rose-400'
                  : 'text-gray-400 border-gray-700 hover:border-rose-400 hover:text-white'
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Карточки проектов */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl group"
            >
              <h2 className="text-2xl font-bold text-rose-300 group-hover:text-rose-400 transition">
                {project.title}
              </h2>
              <p className="text-gray-300 mt-3">{project.description}</p>
              <p className="text-sm mt-4 text-gray-400">
                Технологии: {project.tech.join(', ')}
              </p>

              {/* Кнопки ссылок */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-violet-300 hover:text-violet-500 transition underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm text-violet-300 hover:text-violet-500 transition underline"
                >
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Смотреть ещё" */}
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-sm transition"
            >
              Смотреть ещё
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
