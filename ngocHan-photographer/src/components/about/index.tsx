import React, { useState } from "react";
import IntroModal from "./IntroModal";

const About: React.FC = () => {
    const [isIntroOpen, setIsIntroOpen] = useState(false);

    const openIntro = () => setIsIntroOpen(true);
    const closeIntro = () => setIsIntroOpen(false);

    return (
        <div className="relative flex justify-center items-center py-2">
            {/* Button to open the intro modal */}
            <button
                onClick={openIntro}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 font-jura font-bold"
            >
                Giới thiệu về tôi
            </button>

            {/* Intro Modal */}
            <IntroModal isOpen={isIntroOpen} onClose={closeIntro} />
        </div>
    );
};

export default About;
