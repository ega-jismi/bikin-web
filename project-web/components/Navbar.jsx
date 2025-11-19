'use client'
import Link from 'next/link'
import DarkToggle from './DarkToggle'
import { useState } from 'react'
import { FiSearch, FiShoppingCart, FiHeart } from 'react-icons/fi'
import useStore from '../store/store'

export default function Navbar(){
  const [q, setQ] = useState('')
  const setQuery = useStore(s => s.setQuery)
  const cartCount = useStore(s => s.cart.length)
  const wishlistCount = useStore(s => s.wishlist.length)

  function onSearch(e){
    e.preventDefault()
    setQuery(q)
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded flex items-center justify-center text-white font-bold">G</div>
          <span className="font-semibold text-lg">Gramedia Pro</span>
        </Link>

        <form onSubmit={onSearch} className="flex-1 mx-6 max-w-xl">
          <div className="relative">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari buku, penulis, tag..." className="w-full border rounded-md px-3 py-2 pr-10" />
            <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-2"><FiSearch/></button>
          </div>
        </form>

        <nav className="flex items-center gap-3">
          <Link href="/katalog" className="text-sm">Katalog</Link>
          <Link href="/wishlist" className="relative">
            <FiHeart />
            {wishlistCount>0 && <span className="absolute -top-2 -right-4 text-xs bg-red-500 text-white rounded-full px-1">{wishlistCount}</span>}
          </Link>
          <Link href="/cart" className="relative">
            <FiShoppingCart />
            {cartCount>0 && <span className="absolute -top-2 -right-4 text-xs bg-red-500 text-white rounded-full px-1">{cartCount}</span>}
          </Link>
          <DarkToggle />
        </nav>
      </div>
    </header>
  )
}
