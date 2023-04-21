import React from 'react';

interface CardProps {
  src: string;
  title: string;
  description: string;
}

function Card(props: CardProps) {
  return (
    <div className='border-none bg-blue-300 w-md h-lg'>
      <img src={props.src} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
