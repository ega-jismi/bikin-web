export const books = [
  {
    id: 'b1',
    title: 'Pemrograman Web Dasar',
    author: 'Andika Sihombing',
    price: 120000,
    cover: '/images/book1.jpg',
    tags: ['programming','web'],
    description: 'Pengantar lengkap pemrograman web: HTML, CSS, JavaScript, dan praktik dasar.'
    id: 1,
    title: "Milk and Honey",
    author: "Rupi Kaur",
@@ -15,6 +22,13 @@ export const books = [
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'b2',
    title: 'Belajar React Modern',
    author: 'Sinta Pratiwi',
    price: 150000,
    cover: '/images/book2.jpg',
    tags: ['react','frontend'],
    description: 'Panduan praktis membangun aplikasi modern dengan React dan ekosistemnya.'
    id: 2,
    title: "How Innovation Works",
    author: "Matt Ridley",
@@ -30,6 +44,13 @@ export const books = [
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'b3',
    title: 'Basis Data untuk Developer',
    author: 'Budi Hartono',
    price: 90000,
    cover: '/images/book3.jpg',
    tags: ['database','sql'],
    description: 'Dasar-dasar database relasional, query SQL, dan desain skema.'
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
@@ -45,6 +66,13 @@ export const books = [
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'b4',
    title: 'Algoritma & Struktur Data',
    author: 'Citra Lestari',
    price: 200000,
    cover: '/images/book4.jpg',
    tags: ['algorithms','interview'],
    description: 'Referensi algoritma dan struktur data untuk studi dan wawancara teknis.'
    id: 4,
    title: "Zero to One",
    author: "Peter Thiel",
@@ -59,4 +87,23 @@ export const books = [
    desc: "Buku legendaris tentang cara membangun startup dan masa depan. Peter Thiel mengajarkan cara berpikir kontrarian.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'b5',
    title: 'Desain UI/UX untuk Web',
    author: 'Rizal Kurnia',
    price: 110000,
    cover: '/images/book5.jpg',
    tags: ['design','uiux'],
    description: 'Prinsip desain antarmuka dan pengalaman pengguna untuk web modern.'
  }
];

export const reviews = {
  b1: [
    { id: 'r1', user: 'Ani', rating: 5, text: 'Sangat membantu untuk pemula.' },
    { id: 'r2', user: 'Bambang', rating: 4, text: 'Materi jelas, contoh praktis.' }
  ],
  b2: [
    { id: 'r3', user: 'Dewi', rating: 5, text: 'React dijelaskan dengan rapi.' }
  ]
};
