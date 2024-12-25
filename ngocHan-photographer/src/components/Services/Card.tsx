import React from "react";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className="mb-8 text-center">
            <img
                src={image}
                alt={title}
                className="rounded-lg shadow-md mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
