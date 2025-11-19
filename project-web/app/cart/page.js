'use client'
import useStore from '../../store/store'

export default function Cart(){
  const cart = useStore(s => s.cart)
  const remove = useStore(s => s.removeFromCart)
  const total = cart.reduce((sum,i)=> sum + i.price * i.qty, 0)

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
      {cart.length===0 ? (
        <div className="p-6 card">Keranjang kosong.</div>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.id} className="p-4 card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={item.cover} alt={item.title} className="w-20 h-28 object-cover" />
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.author}</div>
                </div>
              </div>
              <div className="text-right">
                <div>Qty: {item.qty}</div>
                <div className="font-semibold">Rp {(item.price * item.qty).toLocaleString('id-ID')}</div>
                <button onClick={()=>remove(item.id)} className="mt-2 px-3 py-1 border rounded">Hapus</button>
              </div>
            </div>
          ))}
          <div className="p-4 card">
            <div className="flex justify-between items-center">
              <div className="font-semibold">Total</div>
              <div className="text-xl font-bold">Rp {total.toLocaleString('id-ID')}</div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded">Checkout (demo)</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
