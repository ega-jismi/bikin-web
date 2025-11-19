"use client";
import { useMemo } from "react";
import BookCard from "../../components/BookCard";
import { books } from "../../lib/mock";
import useStore from "../../store/store";
import { motion } from "framer-motion";

export default function Katalog() {
   const q = useStore((s) => s.query);

   const filtered = useMemo(() => {
      if (!q) return books;
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
         <motion.h1
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
         >
            Katalog
         </motion.h1>

         <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="show"
            variants={{
               hidden: { opacity: 0 },
               show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12 },
               },
            }}
         >
            {filtered.map((b) => (
               <motion.div
                  key={b.id}
                  variants={{
                     hidden: { opacity: 0, y: 25, scale: 0.95 },
                     show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 140 }}
               >
                  <BookCard book={b} />
               </motion.div>
            ))}
         </motion.div>
      </section>
   );
}
