import Link from 'next/link'
import { books } from '../lib/mock'
import BookCard from '../components/BookCard'

export default function Home(){
  return (
    <section>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 card p-6">
          <h2 className="text-2xl font-bold">Selamat datang di Gramedia Pro</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Temukan buku terbaik untuk belajar dan berkarya.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/katalog" className="px-4 py-2 bg-blue-600 text-white rounded">Jelajahi Katalog</Link>
            <Link href="/katalog" className="px-4 py-2 border rounded">Lihat Promo</Link>
          </div>
        </div>
        <div className="card p-4">
          <h3 className="font-semibold mb-2">Kategori Populer</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
            <li>Programming</li>
            <li>Design</li>
            <li>Database</li>
            <li>Algorithms</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Rekomendasi untuk Anda</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.slice(0,4).map(b=> <BookCard key={b.id} book={b} />)}
      </div>
    </section>
  )
}
