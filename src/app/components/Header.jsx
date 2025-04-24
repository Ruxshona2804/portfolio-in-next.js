"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Импорт

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileMenuVariants = {
        open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        closed: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeInOut" } }
    };


    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-gray-900 via-black to-gray-900/90 text-violet-100 shadow-xl">
            <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center">
                {/* Логотип */}
                <Link href="/" className="text-2xl font-extrabold tracking-wider text-rose-300 hover:text-rose-400 transition duration-300">
                    Ruxshona
                </Link>

                {/* Десктоп навигация */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-6 lg:space-x-8 text-base font-semibold">
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-rose-300 transition duration-300"
                            >
                                Обо мне
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portfolio"
                                className="hover:text-rose-300 transition duration-300"
                            >
                                Портфолио
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-rose-300 transition duration-300"
                            >
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Мобильное меню кнопка */}
                <button
                    className="md:hidden text-violet-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        // Иконка закрытия (X)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Иконка меню (бургер)
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Мобильное меню */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden px-6 pb-4"
                    >
                        <ul className="flex flex-col space-y-3 text-base font-medium bg-gray-900/90 rounded-xl shadow-md p-4">
                            <li>
                                <Link
                                    href="/about"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-violet-100 hover:text-rose-300 transition duration-300 py-2"
                                >
                                    Обо мне
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-violet-100 hover:text-rose-300 transition duration-300 py-2"
                                >
                                    Портфолио
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block text-violet-100 hover:text-rose-300 transition duration-300 py-2"
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;