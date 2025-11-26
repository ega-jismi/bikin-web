"use client";

import { useState } from "react";
import { books, reviews } from "../../../lib/mock";
import BookCard from "../../../components/BookCard";
import { motion } from "framer-motion";

export default function Detail({ params }) {
   // Cari buku berdasarkan ID dari URL
   const book = books.find((b) => b.id === params.id);

   // Siapkan data awal dengan aman
   const initialReviews = (book && reviews && reviews[book.id]) ? reviews[book.id] : [];

   // Masukkan data yang sudah aman ke useState
   const [reviewList, setReviewList] = useState(initialReviews);
   
   // State untuk Form Input
   const [name, setName] = useState("");
   const [comment, setComment] = useState("");
   const [rating, setRating] = useState(5);

   // Jika buku tidak ditemukan, tampilkan pesan error
   if (!book) return <div className="p-10 text-center">Buku tidak ditemukan</div>;

   const related = books.filter((b) => b.id !== book.id).slice(0, 3);

   // --- FUNGSI SUBMIT ULASAN ---
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !comment) return;

      const newReview = {
         id: Date.now(),
         user: name,
         rating: Number(rating),
         text: comment,
      };

      setReviewList([newReview, ...reviewList]);
      setName("");
      setComment("");
      setRating(5);
   };

   return (
      <section className="max-w-4xl mx-auto pb-10">
         <div className="grid md:grid-cols-3 gap-8">
            {/* Bagian Kiri: Cover */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="md:col-span-1"
            >
               <div className="card p-4 border bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <img
                     src={book.cover}
                     alt={book.title}
                     className="w-full h-auto rounded shadow-sm"
                  />
               </div>
            </motion.div>

            {/* Bagian Kanan: Info Buku */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="md:col-span-2"
            >
               <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{book.title}</h1>
               <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {book.author}
               </p>
               <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                  {book.description}
               </p>
               
               {/* Harga & Tombol */}
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                  <div>
                     <span className="text-sm text-gray-500 dark:text-gray-400 block">Harga Terbaik</span>
                     <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                        Rp {Number(book.price).toLocaleString("id-ID")}
                     </div>
                  </div>
                  <button className="flex-1 w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1">
                     + Tambah ke Keranjang
                  </button>
               </div>
            </motion.div>
         </div>

         <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

         {/* --- AREA ULASAN & FORM --- */}
         <div className="grid md:grid-cols-2 gap-10">
            
            {/* 1. DAFTAR ULASAN */}
            <div>
               <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  <span>💬</span> Ulasan Pembaca <span className="text-sm font-normal text-gray-500">({reviewList.length})</span>
               </h3>
               
               <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  {reviewList.length > 0 ? (
                     reviewList.map((r) => (
                        <motion.div
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           key={r.id}
                           className="p-5 border border-gray-100 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 shadow-sm"
                        >
                           <div className="flex justify-between items-start mb-2">
                              <div>
                                 <div className="font-bold text-gray-900 dark:text-white">{r.user}</div>
                                 <div className="text-xs text-gray-500">Pembaca Terverifikasi</div>
                              </div>
                              <div className="flex text-yellow-400 text-sm">
                                 {"★".repeat(r.rating)}
                                 <span className="text-gray-300">{"★".repeat(5 - r.rating)}</span>
                              </div>
                           </div>
                           <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                              "{r.text}"
                           </p>
                        </motion.div>
                     ))
                  ) : (
                     <div className="text-center py-10 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">Belum ada ulasan. Jadilah yang pertama!</p>
                     </div>
                  )}
               </div>
            </div>

            {/* 2. FORM TAMBAH ULASAN */}
            <div className="bg-gray-50 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 h-fit sticky top-4">
               <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Tulis Ulasan Anda</h3>
               <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Input Nama */}
                  <div>
                     <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Nama</label>
                     <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                     />
                  </div>

                  {/* Input Rating (DENGAN IKON BINTANG) */}
                  <div>
                     <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Rating</label>
                     <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((num) => (
                           <button
                              key={num}
                              type="button"
                              onClick={() => setRating(num)}
                              className="focus:outline-none transition-transform active:scale-95 hover:scale-110"
                           >
                              {/* SVG Bintang */}
                              <svg 
                                 className={`w-8 h-8 transition-colors duration-200 ${
                                    num <= rating 
                                       ? "text-yellow-400 fill-yellow-400 drop-shadow-sm" // Warna Kuning jika terpilih
                                       : "text-gray-300 fill-gray-200 dark:text-gray-600 dark:fill-gray-700" // Warna Abu jika tidak
                                 }`}
                                 viewBox="0 0 24 24" 
                                 stroke="currentColor" 
                                 strokeWidth="1"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                              </svg>
                           </button>
                        ))}
                     </div>
                     <div className="text-xs text-gray-400 mt-1 ml-1">
                        {rating === 5 ? "Sempurna!" : rating >= 4 ? "Sangat Bagus" : rating >= 3 ? "Cukup Bagus" : "Kurang"}
                     </div>
                  </div>

                  {/* Input Komentar */}
                  <div>
                     <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Ulasan</label>
                     <textarea 
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="3"
                        placeholder="Apa pendapat Anda tentang buku ini?"
                        className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 outline-none transition-all resize-none"
                     ></textarea>
                  </div>

                  <button 
                     type="submit"
                     className="w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                  >
                     Kirim Ulasan
                  </button>
               </form>
            </div>
         </div>

         {/* --- REKOMENDASI --- */}
         <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-purple-500 pl-4">
               Mungkin Anda Suka
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
               {related.map((b) => (
                  <BookCard key={b.id} book={b} />
               ))}
            </div>
         </div>
      </section>
   );
}
