"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import useStore from "../store/store";
import { useState } from "react";

export default function BookCard({ book }) {
   const add = useStore((s) => s.addToCart);
   const toggleWish = useStore((s) => s.toggleWishlist);

   const [imgError, setImgError] = useState(false);

   // Popup hati
   const [showHeart, setShowHeart] = useState(false);

   const priceNumber =
      typeof book.price === "number" ? book.price : Number(book.price) || 0;

   function handleWish() {
      toggleWish(book.id);

      // Tampilkan popup hati
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 600); // hilang otomatis
   }

   return (
      <motion.article
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         whileHover={{ scale: 1.03, y: -2 }}
         transition={{ duration: 0.25 }}
         className="relative rounded-xl shadow-md hover:shadow-xl bg-white dark:bg-gray-900
      overflow-hidden border border-gray-100 dark:border-gray-700"
      >
         {/* ❤️ Popup animasi */}
         {showHeart && (
            <motion.div
               initial={{ opacity: 0, scale: 0.5, y: 10 }}
               animate={{ opacity: 1, scale: 1.3, y: -20 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.6, type: "spring" }}
               className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               text-pink-500 text-4xl pointer-events-none select-none"
            >
               ❤️
            </motion.div>
         )}

         <Link
            href={`/detail/${book.id}`}
            className="block h-64 overflow-hidden"
         >
            <motion.img
               src={imgError ? "/fallback.jpg" : book.cover}
               alt={book.title}
               onError={() => setImgError(true)}
               className="w-full h-full object-cover"
               whileHover={{ scale: 1.08 }}
               transition={{ duration: 0.3 }}
            />
         </Link>

         <div className="p-4">
            <h3 className="text-sm font-medium truncate text-black dark:text-white">
               {book.title}
            </h3>

            <p className="text-xs text-gray-500">{book.author}</p>

            <div className="mt-3 flex items-center justify-between">
               <div className="font-semibold text-purple-700 dark:text-purple-300">
                  Rp {priceNumber.toLocaleString("id-ID")}
               </div>

               <div className="flex gap-2">
                  <motion.button
                     whileTap={{ scale: 0.9 }}
                     whileHover={{ scale: 1.1 }}
                     onClick={handleWish}
                     className="px-2 py-1 border rounded text-xs
                     text-purple-700 dark:text-purple-300
                     border-purple-400 dark:border-purple-500"
                  >
                     Wish
                  </motion.button>

                  <motion.button
                     whileTap={{ scale: 0.9 }}
                     whileHover={{ scale: 1.1 }}
                     onClick={() => add(book)}
                     className="px-2 py-1 bg-purple-700 text-white rounded text-xs"
                  >
                     Add
                  </motion.button>
               </div>
            </div>
         </div>
      </motion.article>
   );
}
