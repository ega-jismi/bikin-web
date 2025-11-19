import { books } from '../../../lib/mock'

export async function GET(req) {
  const url = new URL(req.url)
  const id = url.searchParams.get('id')
  if(id) {
    const b = books.find(x => x.id === id)
    return new Response(JSON.stringify(b || null), { status: 200 })
  }
  return new Response(JSON.stringify(books), { status: 200 })
}
