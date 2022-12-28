import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from "next/head";
import Image from 'next/image';
import Avatar from "../components/Avatar";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import PublicIcon from '@mui/icons-material/Public';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
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
    <div className='flex flex-col items-center justify-center h-screen'>
      
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <IconButton>
              <GridViewRoundedIcon />
          </IconButton>
          <Avatar url="https://firebasestorage.googleapis.com/v0/b/fir-upload-f609a.appspot.com/o/kie.jpg?alt=media&token=9bb867da-855f-4e98-9766-5c9a1bab175a" />
        </div>
      </header>

      <form className='flex flex-col mb-5  mt-14 items-center flex-grow w-4/5'>
        <Image
          src="https://rabankcard.com/wp-content/uploads/2017/09/fixed-google-logo-font.png"
          height={200}
          width={200} 
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-1  items-center sm:max-w-xl lg:max-w-2xl'>
          <IconButton className='mr-3 text-gray-500'>
            <SearchIcon onClick={search} />
          </IconButton>
          
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search Google or type a URL" 
            className='outline-none flex-grow'
          />
          <IconButton>
            <MicIcon />
          </IconButton>
          
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
          <button onClick={search} className='button'>Google Search</button>
          <button onClick={search} className='button'>I'm Feeling Lucky</button>
        </div>
      </form>

      <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500'>
        <div className='px-8 py-3'>
          <p>Ethiopia</p>
        </div>
        <div className='grid grid-cols-1 grid-flow-row-dense px-8 py-3 gap-y-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2'>
            <PublicIcon className='text-green-700 mr-1' /> Carbon neutral since 2007
          </div>
          <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
            <p>Advertising</p>
            <p>Business</p>
            <p>How to Search Works</p>
          </div>
          <div className='flex justify-center space-x-8 md:ml-auto'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
