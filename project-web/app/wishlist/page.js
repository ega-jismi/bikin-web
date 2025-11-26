"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useStore from "../../store/store";
import { books } from "../../lib/mock";
import BookCard from "../../components/BookCard";
import QuickViewModal from "../../components/QuickViewModal";
import { motion } from "framer-motion";
import { FiHeart, FiBookOpen, FiArrowRight } from "react-icons/fi";

const container = {
   hidden: { opacity: 0, y: 15 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.08 },
   },
};

const item = {
   hidden: { opacity: 0, y: 12 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Wishlist() {
   const router = useRouter();
   const wishlist = useStore((s) => s.wishlist);
   const [selectedBook, setSelectedBook] = useState(null);

   // Filter buku yang ada di wishlist
   const wishlistItems = books.filter((b) => wishlist.includes(b.id));

   // Ambil rekomendasi (buku yang TIDAK ada di wishlist)
   const recommendations = books.filter((b) => !wishlist.includes(b.id)).slice(0, 4);

   return (
      <section className="min-h-screen py-8">
         <QuickViewModal book={selectedBook} onClose={() => setSelectedBook(null)} />

         {/* HEADER WISHLIST */}
         <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-slate-800 pb-4">
            <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white flex items-center gap-3">
               <FiHeart className="text-red-500 fill-red-500" /> Wishlist Saya
            </h1>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
               {wishlistItems.length} Item Tersimpan
            </span>
         </div>

         {/* KONTEN WISHLIST */}
         {wishlistItems.length === 0 ? (
            // TAMPILAN JIKA KOSONG (EMPTY STATE)
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} 
               animate={{ opacity: 1, scale: 1 }} 
               className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center shadow-sm"
            >
               <div className="w-24 h-24 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-6">
                  <FiHeart className="w-10 h-10 text-red-400" />
               </div>
               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  Belum Ada Buku Favorit?
               </h2>
               <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
                  Simpan buku yang ingin kamu baca nanti di sini. Jangan biarkan daftar bacaanmu kosong!
               </p>
               <Link 
                  href="/katalog" 
                  className="px-8 py-3 bg-bookBlue hover:bg-blue-900 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
               >
                  <FiBookOpen /> Jelajahi Katalog
               </Link>
            </motion.div>
         ) : (
            // TAMPILAN JIKA ADA ISI
            <motion.div
               key={wishlistItems.length}
               initial="hidden"
               animate="visible"
               variants={container}
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
               {wishlistItems.map((b) => (
                  <motion.div key={b.id} variants={item}>
                     <BookCard book={b} onQuickView={(data) => setSelectedBook(data)} />
                  </motion.div>
               ))}
            </motion.div>
         )}

         {/* REKOMENDASI (CROSS SELLING) */}
         {/* Tampilkan rekomendasi baik wishlist kosong maupun ada isi */}
         <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white border-l-4 border-bookBlue pl-4">
                  Rekomendasi Untukmu
               </h3>
               <Link href="/katalog" className="text-sm font-bold text-bookBlue hover:underline flex items-center gap-1">
                  Lihat Semua <FiArrowRight />
               </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
               {recommendations.map((b) => (
                  <BookCard key={b.id} book={b} onQuickView={(data) => setSelectedBook(data)} />
               ))}
            </div>
         </div>

      </section>
   );
}
