export const books = [
  {
    id: 'b1',
    title: 'Pemrograman Web Dasar',
    author: 'Andika Sihombing',
    category: 'Programming',
    categoryColor: 'bg-blue-600', // Tambahan warna kategori
    price: 120000,
    rating: 4.7, // Tambahan rating
    sold: 230,   // Tambahan info terjual
    pages: 180,
    language: 'Indonesia',
    publishDate: '2023',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800', // Gambar Coding Web
    desc: 'Pengantar lengkap pemrograman web: HTML, CSS, JavaScript, dan praktik dasar membangun website responsif.'
  },
  {
    id: 'b2',
    title: 'Belajar React Modern',
    author: 'Sinta Pratiwi',
    category: 'Frontend',
    categoryColor: 'bg-cyan-600',
    price: 150000,
    rating: 4.9,
    sold: 450,
    pages: 320,
    language: 'Indonesia',
    publishDate: '2024',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800', // Gambar React/JS
    desc: 'Panduan praktis membangun aplikasi modern dengan React, Hooks, dan ekosistemnya untuk developer masa kini.'
  },
  {
    id: 'b3',
    title: 'Basis Data untuk Developer',
    author: 'Budi Hartono',
    category: 'Backend',
    categoryColor: 'bg-emerald-600',
    price: 90000,
    rating: 4.5,
    sold: 120,
    pages: 210,
    language: 'Indonesia',
    publishDate: '2022',
    image: 'https://images.unsplash.com/photo-1558494949-ef526b004297?auto=format&fit=crop&q=80&w=800', // Gambar Server/Database
    desc: 'Dasar-dasar database relasional, query SQL, normalisasi, dan desain skema yang efisien.'
  },
  {
    id: 'b4',
    title: 'Algoritma & Struktur Data',
    author: 'Citra Lestari',
    category: 'Computer Science',
    categoryColor: 'bg-purple-600',
    price: 200000,
    rating: 4.8,
    sold: 89,
    pages: 450,
    language: 'Indonesia',
    publishDate: '2023',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800', // Gambar Matrix/Algo
    desc: 'Referensi lengkap algoritma dan struktur data untuk studi akademis dan persiapan wawancara teknis (Coding Interview).'
  },
  {
    id: 'b5',
    title: 'Desain UI/UX untuk Web',
    author: 'Rizal Kurnia',
    category: 'Design',
    categoryColor: 'bg-pink-500',
    price: 110000,
    rating: 4.6,
    sold: 310,
    pages: 195,
    language: 'Indonesia',
    publishDate: '2023',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800', // Gambar Desain UI
    desc: 'Prinsip desain antarmuka dan pengalaman pengguna (User Experience) untuk menciptakan web modern yang ramah pengguna.'
  },
  // --- Data Lama (Opsional, kalau mau tetap disimpan) ---
  {
    id: 6, // ID saya ubah biar tidak bentrok
    title: "Milk and Honey",
    author: "Rupi Kaur",
    category: "Best Seller",
    categoryColor: "bg-gray-800",
    price: 125000,
    rating: 4.8,
    sold: 1200,
    pages: 208,
    language: "Inggris",
    publishDate: "2015",
    desc: "Koleksi puisi dan prosa tentang cara bertahan hidup. Tentang pengalaman kekerasan, pelecehan, cinta, kehilangan, dan feminitas.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
  },
];

// Data Review (Bisa kita pakai nanti untuk fitur komentar)
export const reviews = {
  b1: [
    { id: 'r1', user: 'Ani', rating: 5, text: 'Sangat membantu untuk pemula.' },
    { id: 'r2', user: 'Bambang', rating: 4, text: 'Materi jelas, contoh praktis.' }
  ],
  b2: [
    { id: 'r3', user: 'Dewi', rating: 5, text: 'React dijelaskan dengan rapi.' }
  ]
};
