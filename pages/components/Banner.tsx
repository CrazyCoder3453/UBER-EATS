import React from 'react';
import Header from './Header';
import Options from './Options';

function Banner() {
  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('https://asomarketing.com.br/wp-content/uploads/2020/06/uber-eats-entrega-express.jpg')" }}>
        <Header />

        <h1 className='text-5xl font-bold sm:ml-6 md:ml-8 lg:ml-10 mb-14 mt-32'>Order food to your door</h1>
        <Options />
    </div>
  );
}

export default Banner;
