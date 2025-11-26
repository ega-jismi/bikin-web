"use client";

import Link from "next/link";
import { books } from "../lib/mock";
import BookCard from "../components/BookCard";
import GenreList from "../components/GenreList";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      
      {/* WRAPPER UTAMA: Membatasi lebar agar tidak terlalu melebar di layar besar, tapi tetap rapi */}
      <div className="max-w-7xl mx-auto space-y-10">

        {/* --- 1. HERO SECTION (GRID) --- */}
        {/* Menggunakan div biasa untuk layout grid agar lebih stabil daripada motion.div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            
            {/* KIRI: Selamat Datang (Mengambil 2 kolom) */}
            <motion.div 
              className="md:col-span-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-pink-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-purple-700 dark:text-purple-300 tracking-tight leading-tight">
                  Selamat datang di Gramedia Pro
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
                  Temukan buku terbaik untuk belajar dan berkarya.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/katalog" className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-md transition-all font-medium">
                      Jelajahi Katalog
                  </Link>
                  <Link href="/katalog" className="px-6 py-3 border border-purple-300 bg-white/50 dark:bg-gray-800/50 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-xl shadow-sm transition-all font-medium dark:text-white">
                      Lihat Promo
                  </Link>
                </div>
            </motion.div>

            {/* KANAN: Kategori Populer (Mengambil 1 kolom) */}
            <motion.div 
              className="md:col-span-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-purple-100 dark:border-gray-700 p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h3 className="font-bold text-purple-700 dark:text-purple-300 text-xl mb-4">
                  Kategori Populer
                </h3>
                <ul className="space-y-3">
                  {["Programming", "Design", "Database", "Algorithms"].map((c, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 hover:text-pink-500 cursor-pointer font-medium transition-colors border-b border-gray-100 dark:border-gray-800 pb-2 last:border-0">
                      {c}
                    </li>
                  ))}
                </ul>
            </motion.div>
        </div>

        {/* --- 2. REKOMENDASI UNTUK ANDA --- */}
        <div className="w-full">
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6 px-1">
               Rekomendasi untuk Anda
            </h3>

            {/* Grid Kartu Buku: Pastikan grid-cols diatur dengan benar */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                 hidden: { opacity: 0 },
                 visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {books.slice(0, 4).map((b) => (
                <motion.div 
                  key={b.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <BookCard book={b} />
                </motion.div>
              ))}
            </motion.div>
        </div>

        {/* --- 3. GENRE PILIHAN (Sudah Rapi) --- */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.4 }}
        >
           <GenreList />
        </motion.div>

      </div>
    </section>
  );
}
