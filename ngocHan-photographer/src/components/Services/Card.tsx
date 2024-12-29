import React from "react";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        // <div className="mb-8 text-center">
        //     <img
        //         src={image}
        //         alt={title}
        //         className="rounded-lg shadow-md mx-auto mb-4"
        //     />
        //     <h2 className="text-xl font-semibold">{title}</h2>
        //     <p className="text-gray-600">{description}</p>
        // </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg py-5">
            <img className="w-full rounded-t-md" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    );
};

export default Card;
