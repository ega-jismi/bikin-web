"use client";

import { useMemo } from "react";
import BookCard from "../../components/BookCard";
import { books } from "../../lib/mock";
import useStore from "../../store/store";
import { motion } from "framer-motion";

export default function Katalog() {
   // Ambil query (kata kunci pencarian) dan fungsi untuk mengubahnya
   const q = useStore((s) => s.query);
   const setQuery = useStore((s) => s.setQuery);

   // Logika Filter
   const filtered = useMemo(() => {
      if (!q) return books; // Jika tidak ada filter, tampilkan semua
      const x = q.toLowerCase();
      return books.filter(
         (b) =>
            b.title.toLowerCase().includes(x) ||
            b.author.toLowerCase().includes(x) ||
            b.tags.join(" ").includes(x),
      );
   }, [q]);

   return (
      <section>
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <motion.h1
               className="text-3xl font-bold text-gray-900 dark:text-white"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.4 }}
            >
               Katalog Buku
            </motion.h1>

            {/* --- TOMBOL RESET FILTER (Hanya muncul jika ada pencarian) --- */}
            {q && (
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700"
               >
                  <span className="text-sm text-purple-700 dark:text-purple-300">
                     Menampilkan hasil: <strong>"{q}"</strong>
                  </span>
                  <button
                     onClick={() => setQuery("")} // Hapus query saat diklik
                     className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition-colors"
                  >
                     ✕ Hapus Filter
                  </button>
               </motion.div>
            )}
         </div>

         {filtered.length === 0 ? (
            <div className="text-center py-20">
               <p className="text-xl text-gray-500">Tidak ada buku yang ditemukan.</p>
               <button 
                  onClick={() => setQuery("")}
                  className="mt-4 text-purple-600 hover:underline"
               >
                  Tampilkan Semua Buku
               </button>
            </div>
         ) : (
            <motion.div
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
               initial="hidden"
               animate="show"
               variants={{
                  hidden: { opacity: 0 },
                  show: {
                     opacity: 1,
                     transition: { staggerChildren: 0.1 },
                  },
               }}
            >
               {filtered.map((b) => (
                  <motion.div
                     key={b.id}
                     variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.95 },
                        show: { opacity: 1, y: 0, scale: 1 },
                     }}
                  >
                     <BookCard book={b} />
                  </motion.div>
               ))}
            </motion.div>
         )}
      </section>
   );
}
