import React from 'react';

// Data 5 Genre
const genres = [
    { id: 1, name: "Fiksi Ilmiah" },
    { id: 2, name: "Pengembangan Diri" },
    { id: 3, name: "Komedi & Humor" },
    { id: 4, name: "Misteri & Thriller" },
    { id: 5, name: "Seni & Desain" },
];

const GenreList = () => {
    return (
        // Container Utama: Menggunakan kelas transparan agar menggunakan background dari app/page.js
        // Kita HILANGKAN padding horizontal di sini, karena padding akan diambil dari page.js
        <div className="w-full py-6 bg-transparent rounded-3xl mt-8 mb-4">
            
            {/* Judul Bagian: Berikan padding horizontal (px-4) agar sejajar dengan Rekomendasi */}
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6 pl-1 px-4">
                ✨ Genre Pilihan untuk Anda
            </h3>
            
            {/* Daftar Genre: Menggunakan Flexbox dan scroll horizontal */}
            <div className="flex gap-4 overflow-x-auto pb-3 px-4">
                {genres.map((genre) => (
                    <div key={genre.id} className="flex-none">
                        {/* Kotak Genre: Mengatur ukuran, warna latar belakang, dan efek hover */}
                        <div 
                            className="w-[140px] h-[90px] bg-purple-100/50 dark:bg-gray-800/80 rounded-xl shadow 
                                       flex items-center justify-center cursor-pointer 
                                       transition-all duration-200 hover:bg-purple-200 dark:hover:bg-gray-700 hover:scale-[1.03]"
                        >
                            <span className="text-purple-800 dark:text-purple-200 text-sm font-semibold text-center px-2">
                                {genre.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreList;
