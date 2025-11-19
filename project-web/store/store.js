import create from 'zustand'

const useStore = create(set => ({
  cart: [],
  wishlist: [],
  query: '',
  setQuery: (q)=> set({ query: q }),
  addToCart: (book) => set(state => {
    const exists = state.cart.find(i=>i.id===book.id)
    if(exists) return { cart: state.cart.map(i => i.id===book.id ? { ...i, qty: i.qty+1 } : i) }
    return { cart: [...state.cart, { ...book, qty: 1 }] }
  }),
  removeFromCart: (id) => set(state => ({ cart: state.cart.filter(i=>i.id!==id) })),
  toggleWishlist: (id) => set(state => {
    if(state.wishlist.includes(id)) return { wishlist: state.wishlist.filter(x=>x!==id) }
    return { wishlist: [...state.wishlist, id] }
  })
}))

export default useStore
