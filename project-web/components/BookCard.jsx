"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import useStore from "../store/store";
import { useState } from "react";

export default function BookCard({ book }) {
   const add = useStore((s) => s.addToCart);
   const toggleWish = useStore((s) => s.toggleWishlist);
   const [imgError, setImgError] = useState(false);
   const [showHeart, setShowHeart] = useState(false);

   // --- LOGIKA HARGA DISKON ---
   const originalPrice = Number(book.price) || 0;
   const discount = book.discount || 0; // Ambil data diskon
   const hasDiscount = discount > 0;
   
   // Hitung harga akhir (jika ada diskon, kurangi harganya)
   const finalPrice = hasDiscount 
      ? originalPrice - (originalPrice * discount / 100) 
      : originalPrice;
   // ---------------------------

   function handleWish() {
      toggleWish(book.id);
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 600);
   }

   return (
      <motion.article
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         whileHover={{ scale: 1.03, y: -2 }}
         transition={{ duration: 0.25 }}
         className="relative rounded-xl shadow-md hover:shadow-xl bg-white dark:bg-gray-900
         overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full"
      >
         {/* Label Diskon di Pojok Kiri Atas */}
         {hasDiscount && (
            <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
               Hemat {discount}%
            </div>
         )}

         {/* Popup hati */}
         {showHeart && (
            <motion.div
               initial={{ opacity: 0, scale: 0.5, y: 10 }}
               animate={{ opacity: 1, scale: 1.3, y: -20 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.6, type: "spring" }}
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               text-pink-500 text-4xl pointer-events-none select-none z-20"
            >
               ❤️
            </motion.div>
         )}

         <Link href={`/detail/${book.id}`} className="block relative aspect-[2/3] overflow-hidden">
            <motion.img
               src={imgError ? "/fallback.jpg" : book.cover}
               alt={book.title}
               onError={() => setImgError(true)}
               className="w-full h-full object-cover"
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.3 }}
            />
         </Link>

         <div className="p-4 flex flex-col flex-1">
            <h3 className="text-sm font-medium truncate text-black dark:text-white" title={book.title}>
               {book.title}
            </h3>

            <p className="text-xs text-gray-500 mb-2">{book.author}</p>

            {/* Bagian Harga */}
            <div className="mt-auto">
               {hasDiscount ? (
                  <div className="flex flex-col mb-2">
                     <span className="text-xs text-gray-400 line-through">
                        Rp {originalPrice.toLocaleString("id-ID")}
                     </span>
                     <span className="font-bold text-red-600 dark:text-red-400">
                        Rp {finalPrice.toLocaleString("id-ID")}
                     </span>
                  </div>
               ) : (
                  <div className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                     Rp {originalPrice.toLocaleString("id-ID")}
                  </div>
               )}

               <div className="flex gap-2 justify-between mt-2">
                  <motion.button
                     whileTap={{ scale: 0.9 }}
                     whileHover={{ scale: 1.1 }}
                     onClick={handleWish}
                     className="px-3 py-1.5 border rounded-lg text-xs font-medium
                     text-purple-700 dark:text-purple-300
                     border-purple-400 dark:border-purple-500 hover:bg-purple-50 dark:hover:bg-gray-800"
                  >
                     Wish
                  </motion.button>

                  <motion.button
                     whileTap={{ scale: 0.9 }}
                     whileHover={{ scale: 1.1 }}
                     // Simpan harga final ke cart, bukan harga asli
                     onClick={() => add({ ...book, price: finalPrice })} 
                     className="flex-1 px-3 py-1.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-medium shadow-sm"
                  >
                     + Keranjang
                  </motion.button>
               </div>
            </div>
         </div>
      </motion.article>
   );
}
