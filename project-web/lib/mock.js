export const books = [
  {
    id: 'b1',
    title: 'How Innovation Works',
    author: 'Matt Ridley',
    price: 120000,
    cover: 'https://cdn.gramedia.com/uploads/picture_meta/2023/5/26/uwuojnsnsdhxfgtaztmu7x.jpg',
    tags: ['business', 'innovation'],
    description: 'Eksplorasi mendalam tentang bagaimana inovasi terjadi bukan karena perintah, melainkan melalui kebebasan dan kolaborasi.'
  },
  {
    id: 'b2',
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 150000,
    cover: 'https://gpu.id/data-gpu/images/uploads/book/6cb2696cebc9dee871f57063ba1290b7.jpg',
    tags: ['startup', 'business'],
    description: 'Buku legendaris tentang cara membangun masa depan startup dan menciptakan sesuatu yang benar-benar baru (dari 0 ke 1).'
  },
  {
    id: 'b3',
    title: 'Psychology of Money',
    author: 'Morgan Housel',
    price: 90000,
    cover: 'https://cdn.gramedia.com/uploads/picture_meta/2024/1/20/qvjtc65vbzmexfegzrgs7u.jpg',
    tags: ['finance', 'self-improvement'],
    description: 'Pelajaran abadi mengenai kekayaan, ketamakan, dan kebahagiaan—bahwa mengelola uang bukan hanya soal logika, tapi juga perilaku.'
  },
  {
    id: 'b4',
    title: 'Milk and Honey',
    author: 'Rupi Kaur',
    price: 200000,
    cover: 'https://www.gramedia.com/blog/content/images/2022/05/milk-and-honey.jpg',
    tags: ['poetry', 'literature'],
    description: 'Koleksi puisi dan prosa #1 New York Times Bestseller tentang pengalaman kekerasan, pelecehan, cinta, kehilangan, dan kesembuhan.'
  },
  {
    id: 'b5',
    title: 'Desain UI/UX untuk Web',
    author: 'Jubilee Enterprise',
    price: 110000,
    cover: 'https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/products/-391t2araa.jpg',
    tags: ['design', 'uiux'],
    description: 'Panduan praktis untuk pemula yang ingin menguasai prinsip desain antarmuka (UI) dan pengalaman pengguna (UX) modern.'
  }
];

export const reviews = {
  b1: [
    { id: 'r1', user: 'Ani', rating: 5, text: 'Sangat membuka wawasan tentang sejarah inovasi.' },
    { id: 'r2', user: 'Bambang', rating: 4, text: 'Banyak contoh kasus nyata yang menarik.' }
  ],
  b2: [
    { id: 'r3', user: 'Dewi', rating: 5, text: 'Wajib dibaca untuk founder startup!' }
  ],
  b3: [
    { id: 'r4', user: 'Budi', rating: 5, text: 'Mengubah cara pandang saya tentang menabung.' }
  ],
  b4: [
    { id: 'r5', user: 'Citra', rating: 5, text: 'Sangat menyentuh dan estetik.' }
  ]
};
