export const books = [
  {
    id: 'b1',
    title: 'How Innovation Works',
    author: 'Ega Jismina',
    price: 120000,
    cover: 'https://cdn.gramedia.com/uploads/picture_meta/2023/5/26/uwuojnsnsdhxfgtaztmu7x.jpg',
    tags: ['programming','web'],
    description: 'Pengantar lengkap pemrograman web: HTML, CSS, JavaScript, dan praktik dasar.'
  },
  {
    id: 'b2',
    title: 'Zero to One',
    author: 'Sinta Pratiwi',
    price: 150000,
    cover: 'https://gpu.id/data-gpu/images/uploads/book/6cb2696cebc9dee871f57063ba1290b7.jpg',
    tags: ['react','frontend'],
    description: 'Panduan praktis membangun aplikasi modern dengan React dan ekosistemnya.'
  },
  {
    id: 'b3',
    title: 'Psychology of Money',
    author: 'Budi Hartono',
    price: 90000,
    cover: 'https://cdn.gramedia.com/uploads/picture_meta/2024/1/20/qvjtc65vbzmexfegzrgs7u.jpg',
    tags: ['database','sql'],
    description: 'Dasar-dasar database relasional, query SQL, dan desain skema.'
  },
  {
    id: 'b4',
    title: 'Milk and Honey',
    author: 'Citra Lestari',
    price: 200000,
    cover: 'https://www.gramedia.com/blog/content/images/2022/05/milk-and-honey.jpg',
    tags: ['algorithms','interview'],
    description: 'Referensi algoritma dan struktur data untuk studi dan wawancara teknis.'
  },
  {
    id: 'b5',
    title: 'Desain UI/UX untuk Web',
    author: 'Rizal Kurnia',
    price: 110000,
    cover: 'https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/-391t2araa.jpg',
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
