import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '../components/Avatar'

const Header = () => {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if(!term) return;

    router.push({
      pathname: '/search',
      query: {
        term: term
      }
    })
  }

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-5 items-center'>
      <Image
          src="https://rabankcard.com/wp-content/uploads/2017/09/fixed-google-logo-font.png"
          height={40}
          width={120} 
          alt="profile"
          priority
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />

        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              className="flex-grow w-full focus:outline-none"
              onChange={(e) => router.push(`/search?q=${e.target.value}`)}
            />
            <CloseIcon className='text-gray-500 transition duration-100 transform hover:scale-125 cursor-pointer sm:mr-3 h-5'
              onClick={() => (searchInputRef.current.value = "")}
            />

            <MicIcon className='mr-3 h-5  hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 ' />
            
            <SearchIcon className='hidden h-5 sm:inline-flex text-blue-500 -ml-2 cursor-pointer' onClick={search} />
            
            <button hidden type='submit' onClick={search}>Search</button>
            
        </form>
        <Avatar className='ml-auto' url="https://firebasestorage.googleapis.com/v0/b/fir-upload-f609a.appspot.com/o/kie.jpg?alt=media&token=9bb867da-855f-4e98-9766-5c9a1bab175a" />

      </div>  
    </header>
  )
}

export default Header