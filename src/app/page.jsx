'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-white bg-gradient-to-r from-gray-800 via-rose-600 to-gray-900 bg-[length:200%_200%] animate-gradient-x transition-all duration-1000 ease-in-out">
      <div className="w-full text-center md:text-left space-y-8 container mx-auto md:grid md:grid-cols-2 md:gap-8 lg:gap-16 items-center"> {/* Grid Layout */}

        {/* Текстовый контент */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg"> {/* Уменьшено md размер */}
            Frontend Developer
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-rose-300 tracking-wide">
            Xalilova Ruxshona
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            Привет! Я веб-разработчик, создающий адаптивные и функциональные сайты, которые отвечают потребностям бизнеса и пользователей. Стремлюсь к чистому коду, UX-дружелюбному дизайну и вниманию к деталям.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
            <Link
              href="/portfolio"
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg transform hover:scale-105" /*scale 135 too much*/
            >
              Смотреть портфолио
            </Link>
            <Link
              href="/contact"
              className="text-rose-300 hover:text-rose-400 underline underline-offset-4 font-medium transition duration-300 transform hover:scale-105"
            >
              Связаться со мной
            </Link>
          </div>
        </div>

        {/* Изображение */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/vector-1740835853238-233633b61af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kZXJ8ZW58MHx8MHx8fDA%3D"
            alt="computer"
            className="w-full h-auto object-cover rounded-3xl shadow-lg"  //Удален transform, relative, absolute. width full
          />
        </div>
      </div>
    </div>
  );
}