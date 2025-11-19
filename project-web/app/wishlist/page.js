"use client";
import useStore from "../../store/store";
import { books } from "../../lib/mock";
import BookCard from "../../components/BookCard";
import { motion } from "framer-motion";

const container = {
   hidden: { opacity: 0, y: 15 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.4,
         staggerChildren: 0.08,
      },
   },
};

const item = {
   hidden: { opacity: 0, y: 12 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
   },
};

export default function Wishlist() {
   const wishlist = useStore((s) => s.wishlist);
   const items = books.filter((b) => wishlist.includes(b.id));

   return (
      <section>
         <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold mb-4"
         >
            Wishlist
         </motion.h1>

         {items.length === 0 ? (
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4 }}
               className="card p-4 text-white"
            >
               Wishlist kosong.
            </motion.div>
         ) : (
            <motion.div
               key={items.length}
               initial="hidden"
               animate="visible"
               variants={container}
               className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
               {items.map((b) => (
                  <motion.div key={b.id} variants={item}>
                     <BookCard book={b} />
                  </motion.div>
               ))}
            </motion.div>
         )}
      </section>
   );
}
