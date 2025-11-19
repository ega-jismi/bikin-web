import { books, reviews } from "../../../lib/mock";
import BookCard from "../../../components/BookCard";

export default function Detail({ params }) {
   const book = books.find((b) => b.id === params.id);
   if (!book) return <div>Buku tidak ditemukan</div>;

   const related = books.filter((b) => b.id !== book.id).slice(0, 3);

   return (
      <section className="max-w-4xl mx-auto">
         <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 card p-4">
               <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-auto"
               />
            </div>
            <div className="md:col-span-2">
               <h1 className="text-2xl font-bold">{book.title}</h1>
               <p className="text-sm text-gray-600 dark:text-gray-300">
                  {book.author}
               </p>
               <p className="mt-4">{book.description}</p>
               <div className="mt-6 flex items-center gap-4">
                  <div className="text-2xl font-semibold">
                     Rp {book.price.toLocaleString("id-ID")}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">
                     Tambah ke Keranjang
                  </button>
               </div>

               <div className="mt-8">
                  <h3 className="font-semibold mb-2">Ulasan</h3>
                  <div className="space-y-3">
                     {(reviews[book.id] || []).map((r) => (
                        <div
                           key={r.id}
                           className="p-3 border rounded bg-white dark:bg-gray-800"
                        >
                           <div className="text-sm font-semibold">
                              {r.user} — {r.rating}★
                           </div>
                           <div className="text-sm text-gray-600 dark:text-gray-300">
                              {r.text}
                           </div>
                        </div>
                     ))}
                     {!(reviews[book.id] || []).length && (
                        <div className="text-sm text-gray-500">
                           Belum ada ulasan.
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Mungkin Anda Suka</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
               {related.map((b) => (
                  <BookCard key={b.id} book={b} />
               ))}
            </div>
         </div>
      </section>
   );
}
