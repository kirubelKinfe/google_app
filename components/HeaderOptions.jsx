import React from 'react'
import HeaderOption from './HeaderOption'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MapIcon from '@mui/icons-material/Map';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PhotoIcon from '@mui/icons-material/Photo';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';


const HeaderOptions = () => {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52'>
        <div className='flex space-x-6'>
            <HeaderOption Icon={SearchIcon} title="All" selected />
            <HeaderOption Icon={MapIcon} title="Maps" />
            <HeaderOption Icon={MoreVertIcon} title="More" />
            <HeaderOption Icon={NewspaperIcon} title="News" />
            <HeaderOption Icon={PhotoIcon} title="Images" />
            <HeaderOption Icon={PlayCircleIcon} title="Videos" />
        </div>
        <div className='flex space-x-4'>
            <p className="link">Settings</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}

export default HeaderOptions