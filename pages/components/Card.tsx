import React from 'react'

type CardProps = {
  src: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ src, title, description }) => {
  return (
    <div className="w-96 h-96 bg-gray-100 rounded-md p-4 ml-9">
      <img className="w-full h-56 object-cover rounded-md" src={src} alt={title} />
      <h2 className="mt-2 text-lg font-medium">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Card;
