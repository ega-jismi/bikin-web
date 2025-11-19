"use client";
import useStore from "../../store/store";
import { motion } from "framer-motion";

export default function Cart() {
   const cart = useStore((s) => s.cart);
   const remove = useStore((s) => s.removeFromCart);
   const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

   // Daftar keranjang punya stagger animasi
   const listVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: { staggerChildren: 0.15 },
      },
   };

   // Setiap item fade + slide + scale
   const itemVariants = {
      hidden: { opacity: 0, y: 20, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1 },
   };

   return (
      <section>
         <h1 className="text-2xl font-bold mb-4 text-white">Keranjang</h1>

         {cart.length === 0 ? (
            <motion.div
               className="p-6 card text-white"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4 }}
            >
               Keranjang kosong.
            </motion.div>
         ) : (
            <motion.div
               className="space-y-4"
               variants={listVariants}
               initial="hidden"
               animate="visible"
            >
               {cart.map((item) => (
                  <motion.div
                     key={item.id}
                     className="p-4 card flex items-center justify-between"
                     variants={itemVariants}
                     whileHover={{ scale: 1.02 }}
                     transition={{ type: "spring", stiffness: 200 }}
                  >
                     <div className="flex items-center gap-4">
                        <img
                           src={item.cover}
                           alt={item.title}
                           className="w-20 h-28 object-cover"
                        />

                        <div>
                           <div className="font-semibold text-white">
                              {item.title}
                           </div>
                           <div className="text-sm text-white">
                              {item.author}
                           </div>
                        </div>
                     </div>

                     <div className="text-right text-white">
                        <div>Qty: {item.qty}</div>
                        <div className="font-semibold">
                           Rp {(item.price * item.qty).toLocaleString("id-ID")}
                        </div>

                        <button
                           onClick={() => remove(item.id)}
                           className="mt-2 px-3 py-1 border rounded text-white border-white"
                        >
                           Hapus
                        </button>
                     </div>
                  </motion.div>
               ))}

               <motion.div
                  className="p-4 card text-white"
                  variants={itemVariants}
               >
                  <div className="flex justify-between items-center">
                     <div className="font-semibold">Total</div>
                     <div className="text-xl font-bold">
                        Rp {total.toLocaleString("id-ID")}
                     </div>
                  </div>

                  <div className="mt-4">
                     <button className="px-4 py-2 bg-green-600 text-white rounded">
                        Checkout (demo)
                     </button>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </section>
   );
}
