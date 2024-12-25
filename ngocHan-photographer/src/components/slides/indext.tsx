import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const images = [
    'https://photographer.vn/wp-content/uploads/2016/12/10-y-tuong-chup-anh-nghe-thuat-vo-cung-doc-dao1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBs1fNO0KJpr-HKzdn4O86BjLsSnDnT0uTlQ&s',
    'https://hoangphucphoto.com/wp-content/uploads/2024/02/chup-anh-concept-nang-tho-sieu-hot.jpg'
];

export const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 1500);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-full mx-auto py-10 px-2 sm:px-4 lg:px-6">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform"
            />
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-stone-400 focus:outline-none ml-2 sm:ml-4 lg:ml-6"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full hover:bg-gray-400 focus:outline-none mr-2 sm:mr-4 lg:mr-6"
            >
                <ChevronRight />
            </button>
        </div>
    );
};