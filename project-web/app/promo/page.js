"use client";
import BookCard from "../../components/BookCard";
import { books } from "../../lib/mock";
import { motion } from "framer-motion";

export default function PromoPage() {
   // Filter hanya buku yang punya diskon
   const promoBooks = books.filter((b) => b.discount && b.discount > 0);

   return (
      <section>
         <div className="mb-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white shadow-lg">
            <motion.h1
               className="text-3xl font-bold mb-2"
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
            >
               🔥 Promo Spesial Hari Ini
            </motion.h1>
            <p className="opacity-90">Dapatkan buku terbaik dengan harga lebih hemat.</p>
         </div>

         {promoBooks.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
               Maaf, saat ini belum ada promo tersedia.
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
               {promoBooks.map((b) => (
                  <motion.div
                     key={b.id}
                     variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 },
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
