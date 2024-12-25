import React, { useState } from 'react';

const images = [
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
    'https://shop.photozone.com.vn/wp-content/uploads/2015/06/Dam-chim-trong-the-gioi-tu-nhien-sieu-thuc-dep-la-thuong-20.jpg',
];

const ListImg: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            {/* Grid Layout */}
            <div id='collection' className='text-center mt-2 font-pacifico text-2xl text-white ' >
                <h1>Bộ sưu tầm</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 p-4 ">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* Image */}
                        <img
                            src={image}
                            alt={`img-${index}`}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                                onClick={() => setSelectedImage(image)}
                                className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-700 font-jura"
                            >
                                Xem thêm
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="enlarged-img"
                            className="w-auto max-w-full max-h-screen rounded shadow-lg"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded shadow hover:bg-gray-300 font-jura"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ListImg;
