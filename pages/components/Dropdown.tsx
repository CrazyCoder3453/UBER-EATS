import { useState } from 'react';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Dropdown() {
  const [showList, setShowList] = useState(false);

  const handleToggleList = () => {
    setShowList(!showList);
  }

  return (
    <div className='relative ml-2 mr-2 cursor-pointer'>
      <div className='h-10 w-48 bg-white flex justify-around text-lg font-semibold items-center' onClick={handleToggleList}>
        <WatchLaterIcon /> Deliver Now <ExpandMoreIcon />
      </div>
      {showList && (
        <ul className='absolute top-12 right-0 w-48 bg-white border border-gray-200'>
            <li className='p-2 hover:bg-gray-100 cursor-pointer font-semibold items-center'>
                <WatchLaterIcon className='mr-2' /> Deliver Now
            </li>
          <li className='p-2 hover:bg-gray-100 cursor-pointer font-semibold items-center'>
            <CalendarMonthIcon className='mr-2' /> Schedule for later
          </li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown;
