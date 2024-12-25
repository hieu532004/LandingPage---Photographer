import { useEffect, useState } from 'react';
import { Menu, X, Logs } from 'lucide-react';

export const Headers = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const imageHeight = document.getElementById('image-section')?.clientHeight || 0;
            if (window.scrollY > imageHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`transition-all duration-300 ${isFixed ? 'fixed top-0 left-0 w-full bg-slate-500 bg-opacity-50 shadow-md z-10 text-white' : 'absolute top-0 left-0 w-full bg-transparent z-10'}`}>
            <div className='container mx-auto flex items-center justify-between py-4 px-4'>
                <div className='text-2xl font-pacifico'></div>
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} className='text-xl'>
                        {isMenuOpen ? <X /> : <Menu color='white' />}
                    </button>
                </div>
                <nav className={`lg:flex space-x-8 font-jura font-semibold ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <a href='#' className='text-sm text-white hover:text-gray-300' onClick={closeMenu}>Bộ sưu tầm</a>
                    <a href='#' className='text-sm text-white hover:text-gray-300' onClick={closeMenu}>Giới thiệu</a>
                    <a href='#' className='text-sm text-white hover:text-gray-300' onClick={closeMenu}>Dịch vụ</a>
                    <a href='#' className='text-sm text-white hover:text-gray-300' onClick={closeMenu}>Liên hệ</a>
                </nav>
            </div>
            {isMenuOpen && (
                <div className='lg:hidden fixed top-0 left-0 w-full h-full text-white bg-black bg-opacity-80 z-10'>
                    <nav className='flex flex-col items-center justify-center h-full space-y-8 font-semibold'>
                        <a href='#' className='text-lg hover:text-gray-300' onClick={closeMenu}>Bộ sưu tầm</a>
                        <a href='#' className='text-lg hover:text-gray-300' onClick={closeMenu}>Giới thiệu</a>
                        <a href='#' className='text-lg hover:text-gray-300' onClick={closeMenu}>Dịch vụ</a>
                        <a href='#' className='text-lg hover:text-gray-300' onClick={closeMenu}>Liên hệ</a>
                    </nav>
                </div>
            )}
        </header>
    );
};