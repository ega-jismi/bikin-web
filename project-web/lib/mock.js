export const books = [
  {
    id: 'b1',
    title: 'How Innovation Works',
    author: 'Ega Jismina',
    price: 120000,
    cover: '/images/book1.avif',
    tags: ['programming','web'],
    description: 'Pengantar lengkap pemrograman web: HTML, CSS, JavaScript, dan praktik dasar.'
  },
  {
    id: 'b2',
    title: 'Zero to One',
    author: 'Sinta Pratiwi',
    price: 150000,
    cover: '/images/book2.avif',
    tags: ['react','frontend'],
    description: 'Panduan praktis membangun aplikasi modern dengan React dan ekosistemnya.'
  },
  {
    id: 'b3',
    title: 'Psychology of Money',
    author: 'Budi Hartono',
    price: 90000,
    cover: '/images/book3.avif',
    tags: ['database','sql'],
    description: 'Dasar-dasar database relasional, query SQL, dan desain skema.'
  },
  {
    id: 'b4',
    title: 'Milk and Honey',
    author: 'Citra Lestari',
    price: 200000,
    cover: '/images/book4.avif',
    tags: ['algorithms','interview'],
    description: 'Referensi algoritma dan struktur data untuk studi dan wawancara teknis.'
  },
  {
    id: 'b5',
    title: 'Desain UI/UX untuk Web',
    author: 'Rizal Kurnia',
    price: 110000,
    cover: '/images/book5.avif',
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
