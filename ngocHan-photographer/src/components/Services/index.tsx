import React, { useState } from "react";
import Modal from "./Modal";
import Card from "./Card";

const Services: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const services = [
        {
            image: "https://photographer.vn/wp-content/uploads/2016/12/10-y-tuong-chup-anh-nghe-thuat-vo-cung-doc-dao1.jpg",
            title: "Chụp ảnh ngoài trời",
            description:
                "Chụp ảnh chân dung là nghệ thuật ghi lại vẻ đẹp và tính cách của con người qua những khoảnh khắc tinh tế, từ ánh mắt đến biểu cảm, tạo nên những bức ảnh đầy cảm xúc và chân thực.",
        },
        {
            image: "https://bold.vn/wp-content/uploads/2021/10/chup-anh-chan-dung-co-ban-01.jpg",
            title: "Chụp chân dung",
            description:
                "Chụp ảnh chân dung ngoài trời là cách tuyệt vời để tận dụng ánh sáng tự nhiên và không gian rộng mở, mang đến những bức ảnh sống động, tự nhiên và đầy sức sống.",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60urpHY_IdHY-JjCg8yLfTyHbCRbb79HCmg&s",
            title: "Chụp sự kiện",
            description:
                "Chụp ảnh chân dung sự kiện là việc ghi lại những khoảnh khắc đặc biệt trong các sự kiện, từ những nụ cười, cảm xúc đến những khoảnh khắc đầy ý nghĩa, giúp lưu giữ những ký ức quan trọng và tạo ra những bức ảnh chân thật, ấn tượng.",
        },
    ];

    return (
        <div className="relative flex justify-center items-center ">
            {/* Button to open modal */}
            <button
                onClick={openModal}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 font-jura font-bold"
            >
                Xem dịch vụ
            </button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h1 className="text-3xl font-bold mb-4 text-center font-jura">Dịch vụvụ</h1>
                {services.map((service, index) => (
                    <Card
                        key={index}
                        image={service.image}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </Modal>
        </div>
    );
};

export default Services;
