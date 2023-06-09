import React from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Dropdown from './Dropdown';

function Options() {
  return (
    <div className='sm:ml-6 md:ml-8 lg:ml-10 relative flex'>
        <input type='text' placeholder='  Enter delivery address' className='pl-8 pr-4 py-2 w-full max-w-lg  border rounded-none text-black' />
        <div className='absolute inset-y-0 left-0 pl-3 mr-3 flex items-center'>
            <FmdGoodIcon />
        </div>
        <Dropdown />
        <button className='bg-black p-2 rounded text-white hover:bg-slate-500'>Find Food</button>
    </div>
  );
}

export default Options;
