"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { books } from "../lib/mock";
import BookCard from "../components/BookCard";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  
  // State untuk menyimpan status: Apakah user sudah login atau belum?
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cek apakah ada token di cookie
    const hasToken = document.cookie.includes("token=");
    
    // Simpan statusnya ke state
    setIsLoggedIn(hasToken);
    
    // Matikan loading (Kita TIDAK LAGI memaksa redirect ke login di sini)
    setIsLoading(false);
  }, []);

  // Fungsi Logout
  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0"; // Hapus token
    setIsLoggedIn(false); // Ubah status jadi belum login
    router.refresh(); // Refresh halaman agar tampilan terupdate
  };

  // Tampilkan loading sebentar agar tombol tidak berubah mendadak
  if (isLoading) {
    return null; // Atau return <div...Loading...</div>
  }

  return (
    <section className="relative space-y-12 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 md:p-10 rounded-xl">
      
      {/* --- BAGIAN TOMBOL POJOK KANAN ATAS --- */}
      <div className="absolute top-6 right-6 z-50">
        {isLoggedIn ? (
          // JIKA SUDAH LOGIN: Tampilkan Tombol Logout (Merah)
          <button
            onClick={handleLogout}
            className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-xl shadow-lg transition-all"
          >
            Logout
          </button>
        ) : (
          // JIKA BELUM LOGIN: Tampilkan Tombol Login (Biru)
          <Link
            href="/auth/login"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg transition-all inline-block"
          >
            Login / Masuk
          </Link>
        )}
      </div>

      {/* Hero Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left Content */}
        <motion.div
          className="md:col-span-2 p-8 rounded-3xl shadow-lg bg-white/70 dark:bg-gray-900/70
          backdrop-blur border border-pink-100 dark:border-gray-700"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.h2
            className="text-4xl font-extrabold text-purple-700 dark:text-purple-300 tracking-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Selamat datang di Gramedia Pro
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-700 dark:text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Temukan buku terbaik untuk belajar dan berkarya.
          </motion.p>

          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/katalog"
                className="px-6 py-3 bg-pink-400 text-white rounded-xl shadow
                hover:bg-pink-500 transition-all font-medium"
              >
                Jelajahi Katalog
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/katalog"
                className="px-6 py-3 border border-purple-300 bg-white/60 dark:bg-gray-800/60
                rounded-xl shadow hover:bg-purple-50 dark:hover:bg-gray-700 transition-all font-medium text-white"
              >
                Lihat Promo
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Categories */}
        <motion.div
          className="p-6 rounded-3xl shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur
          border border-purple-100 dark:border-gray-700"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold mb-4 text-purple-700 dark:text-purple-300 text-lg">
            Kategori Populer
          </h3>

          <ul className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
            {["Programming", "Design", "Database", "Algorithms"].map(
              (c, i) => (
                <motion.li
                  key={i}
                  className="hover:text-pink-500 cursor-pointer transition font-medium"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 5 }}
                >
                  {c}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      </motion.div>

      {/* Rekomendasi */}
      <div>
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6">
          Rekomendasi untuk Anda
        </h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {books.slice(0, 4).map((b) => (
            <motion.div
              key={b.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <BookCard book={b} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
