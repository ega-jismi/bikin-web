'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useStore from '../store/store'

export default function BookCard({book}){
  const add = useStore(s => s.addToCart)
  const toggleWish = useStore(s => s.toggleWishlist)

  return (
    <motion.article whileHover={{ scale: 1.02 }} className="card overflow-hidden">
      <Link href={`/detail/${book.id}`} className="block h-64 overflow-hidden">
        <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-sm font-medium truncate">{book.title}</h3>
        <p className="text-xs text-gray-500">{book.author}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="font-semibold">Rp {book.price.toLocaleString('id-ID')}</div>
          <div className="flex gap-2">
            <button onClick={()=>toggleWish(book.id)} className="px-2 py-1 border rounded text-xs">Wish</button>
            <button onClick={()=>add(book)} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">Add</button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
