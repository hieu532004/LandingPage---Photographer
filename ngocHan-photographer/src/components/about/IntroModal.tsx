import React from "react";

interface IntroModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 active:scale-95"
                >
                    ✕
                </button>

                {/* Modal Content */}
                <div className="p-6 text-center max-h-[80vh] overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-4 font-jura">Giới thiệu về tôi</h1>
                    <img
                        src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/420770959_1721082345066925_1630566599565495259_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFdZ_D2wU-kStoje2iFEr9BHobVoMtMWdkehtWgy0xZ2b0dm142YINERSaeCa8aAceGed7q1JGPwBm2Ae1gt_gR&_nc_ohc=F1QtqbiTg54Q7kNvgE62trj&_nc_zt=23&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AxNjjSvtvqpnjREzbBfyesA&oh=00_AYDn8gR65Ni48NCK8XX0Io3SCwdBqsuJ57m3r5e1apffKw&oe=6771D0F7"
                        alt="Your Avatar"
                        className="rounded-full mx-auto mb-6 shadow-md"
                    />
                    <p className="text-gray-600 leading-7 font-playwrite font-bold">
                        Chào mọi người, mình là Hân, một người đam mê nhiếp ảnh.
                        Mình yêu thích việc ghi lại những khoảnh khắc đẹp trong cuộc sống qua ống kính máy ảnh,
                        khám phá thế giới xung quanh và chia sẻ những bức ảnh đầy cảm xúc với mọi người."
                        Bạn có thể thêm hoặc điều chỉnh thông tin để phù hợp với phong cách của mình nhé!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IntroModal;
