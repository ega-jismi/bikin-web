"use client"; 

import React from 'react';
import { useRouter } from "next/navigation"; 
import useStore from "../store/store";       

// GENRE DIPERBARUI: Disesuaikan dengan tag di mock.js (Business, Finance, Poetry, Design)
const genres = [
    { id: 1, name: "Business", icon: "💼" }, // Cocok dengan 'How Innovation Works' & 'Zero to One'
    { id: 2, name: "Finance", icon: "💰" },  // Cocok dengan 'Psychology of Money'
    { id: 3, name: "Design", icon: "🎨" },   // Cocok dengan 'Desain UI/UX'
    { id: 4, name: "Startup", icon: "🚀" },  // Cocok dengan 'Zero to One'
    { id: 5, name: "Poetry", icon: "🌹" },   // Cocok dengan 'Milk and Honey'
];

const GenreList = () => {
    const router = useRouter();
    const setQuery = useStore((s) => s.setQuery);

    const handleGenreClick = (genreName) => {
        // Set query pencarian dan pindah halaman
        setQuery(genreName); 
        router.push("/katalog");
    };

    return (
        <div className="w-full py-6 bg-transparent rounded-3xl mt-8 mb-4">
            
            <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-6 pl-1 px-4 flex items-center gap-2">
                ✨ Genre Pilihan untuk Anda
            </h3>
            
            <div className="flex gap-4 overflow-x-auto pb-4 px-4 custom-scrollbar">
                {genres.map((genre) => (
                    <div key={genre.id} className="flex-none">
                        <button 
                            onClick={() => handleGenreClick(genre.name)}
                            className="group w-[150px] h-[100px] bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-purple-100 dark:border-gray-700
                                       flex flex-col items-center justify-center cursor-pointer 
                                       transition-all duration-300 hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-500 hover:-translate-y-1"
                        >
                            <span className="text-3xl mb-2 filter group-hover:scale-110 transition-transform duration-300">
                                {genre.icon}
                            </span>
                            <span className="text-gray-700 dark:text-gray-200 text-sm font-bold group-hover:text-purple-600 dark:group-hover:text-purple-300">
                                {genre.name}
                            </span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreList;
