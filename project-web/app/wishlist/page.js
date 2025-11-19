'use client'
import useStore from '../../store/store'
import { books } from '../../lib/mock'
import BookCard from '../../components/BookCard'

export default function Wishlist(){
  const wishlist = useStore(s => s.wishlist)
  const items = books.filter(b => wishlist.includes(b.id))

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {items.length===0 ? <div className="card p-4">Wishlist kosong.</div> : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      )}
    </section>
  )
}
