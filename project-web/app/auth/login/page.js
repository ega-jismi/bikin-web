'use client'
import { useState } from 'react'

export default function Login(){
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const submit = (e) => { e.preventDefault(); alert('Login demo: ' + email) }

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="card p-6">
        <label className="block mb-2 text-sm">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border p-2 rounded mb-4" />
        <label className="block mb-2 text-sm">Password</label>
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="w-full border p-2 rounded mb-4" />
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </section>
  )
}
