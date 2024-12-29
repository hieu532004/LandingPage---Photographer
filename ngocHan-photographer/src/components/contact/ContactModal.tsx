import React, { useState } from "react";
import emailjs from "emailjs-com";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.init("6G4poMZ6ckJ9ieFr5"); // Thay YOUR_API_KEY bằng API Key từ EmailJS

        emailjs
            .send(
                "service_04uplcf", // Thay YOUR_SERVICE_ID bằng Service ID
                "template_zyuchtd", // Thay YOUR_TEMPLATE_ID bằng Template ID
                formData // Dữ liệu từ form
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("Thông tin đã được gửi thành công!");
                    setFormData({ name: "", email: "", phone: "", service: "" });
                    onClose();
                },
                (error) => {
                    console.error("Email sending error:", error.text);
                    alert("Có lỗi xảy ra. Vui lòng thử lại.");
                }
            );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 relative">
                {/* Nút đóng */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200 active:scale-95"
                >
                    ✕
                </button>

                {/* Nội dung modal */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-4 text-center">Liên hệ với chúng tôi</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tên của bạn"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email của bạn"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >
                            <option value="">Chọn loại dịch vụ</option>
                            <option value="chụp ảnh cưới">Chụp Ngoài trời</option>
                            <option value="chụp ảnh chân dung">Chụp ảnh chân dung</option>
                            <option value="chụp ảnh sản phẩm">Chụp ảnh sản phẩm</option>
                        </select>
                        <button
                            type="submit"
                            className="w-full bg-red-400 text-white py-3 rounded-lg hover:bg-red-500"
                        >
                            Gửi thông tin
                        </button>
                    </form>

                    {/* Mạng xã hội */}
                    <div className="mt-6 flex justify-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/color/48/facebook-new.png"
                                alt="Facebook"
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://img.icons8.com/color/48/instagram-new.png"
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
