export const Imgfirst = () => {
    return (
        <div className='w-full h-auto relative'>
            <img src="https://adminnhh.vietnamphotographer.net/images/article/KRWBpRN0sf.jpeg" alt="" className="w-full h-[350px] object-cover" />
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-white text-2xl md:text-4xl font-playwrite text-center py-5'>Ngoc Han Photographer</h1>
                <p className="text-white font-jura font-semibold text-center py-10 md:py-20">Mỗi bức ảnh là một khoảnh khắc không thể lặp lại.</p>
            </div>
        </div>
    )
}
