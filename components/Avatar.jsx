import React from 'react'

const Avatar = ({ url, className }) => {
  return (
    <img 
      loading='lazy'
      src={url}
      alt="profile picture"
      className={`${className} h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-150`}
    />
  )
}

export default Avatar