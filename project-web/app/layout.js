import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Gramedia Pro',
  description: 'High-fidelity demo bookstore'
}

export default function RootLayout({ children }){
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
