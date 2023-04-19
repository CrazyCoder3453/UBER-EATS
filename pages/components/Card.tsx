import React from "react";
import Image from "next/image";

function Card({ src, title, description }) {
  return (
    <div className="m-10 border-none cursor-pointer w-full">
      <div className="object-fit-fill flex">
        <Image src={src} alt={title} width={1000} height={1000}/>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
