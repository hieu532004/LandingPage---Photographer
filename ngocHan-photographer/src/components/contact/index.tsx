import React, { useState } from "react";
import ContactModal from "./ContactModal";

const ContactForm: React.FC = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    return (
        <div className="relative flex justify-center items-center py-2">
            {/* Nút mở modal */}
            <button
                onClick={openContact}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 font-jura font-bold"
            >
                Liên hệ với chúng tôi
            </button>

            {/* Modal liên hệ */}
            <ContactModal isOpen={isContactOpen} onClose={closeContact} />
        </div>
    );
};

export default ContactForm;
