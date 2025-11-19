'use client'
import { useMemo } from 'react'
import BookCard from '../../components/BookCard'
import { books } from '../../lib/mock'
import useStore from '../../store/store'

export default function Katalog(){
  const q = useStore(s => s.query)

  const filtered = useMemo(()=>{
    if(!q) return books
    const x = q.toLowerCase()
    return books.filter(b => b.title.toLowerCase().includes(x) || b.author.toLowerCase().includes(x) || b.tags.join(' ').includes(x))
  },[q])

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Katalog</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map(b=> <BookCard key={b.id} book={b} />)}
      </div>
    </section>
  )
}
