'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-rose-600 to-gray-900 px-4 sm:px-6 md:px-12 py-20">
      <div className='container mx-auto'>
        <div
          className="  " // Сохраняем container mx-auto здесь
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className=" mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-8 sm:p-12 space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 leading-tight">
              Привет, я Рухшона
            </h1>

            <p className="text-center text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Я создаю современные, адаптивные и красивые веб-интерфейсы с помощью <strong>React</strong>, <strong>Tailwind CSS</strong> и других современных технологий. Люблю аккуратный код, хороший UX и детали, которые создают вау-эффект.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {/* Навыки */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-tr from-[#848c9f] to-[#ae99a6] rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition"
              >
                <h2 className="text-xl font-bold text-white mb-3">Навыки</h2>
                <ul className="list-disc list-inside text-white space-y-1 text-lg">
                  <li>HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>React, Next.js</li>
                  <li>Tailwind, Sass, SCSS</li>
                  <li>Git, GitHub</li>
                  <li>Figma, UI/UX</li>
                </ul>
              </motion.div>

              {/* Образование */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-tr from-[#bb68aa] to-[#504043] rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition"
              >
                <h2 className="text-xl font-bold text-white mb-3">Образование</h2>
                <p className="text-white text-base leading-relaxed">
                  Najot Ta'lim<br />
                  Frontend Developer <br />
                  Годы обучения: 2024-2025
                </p>
                <p className="text-white text-base leading-relaxed mt-3">
                  Ташкентский государственный педагогический университет имени Низами <br />
                  Факультет: Языков ("Русский язык и литература") <br />
                  Годы обучения: 2023-2027
                </p>
              </motion.div>

              {/* Контакты */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-tr from-[#0d3d69] to-[#04684d] rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition col-span-1 sm:col-span-2"
              >
                <h2 className="text-xl font-bold text-white mb-3">Контакты</h2>
                <p className="text-white md:text-base text-[12px] leading-relaxed">
                  📧 rukhshona.umidjonovnaa@gmail.com <br />
                  📱 +998 93 050 2804 <br />
                  🌐{' '}
                  <a
                    href="https://github.com/Ruxshona2804"
                    className="text-blue-300 hover:underline"
                  >
                    GitHub профиль
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}