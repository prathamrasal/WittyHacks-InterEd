import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
const SocialIconsGroup = ({className}) => {
  return (
    <div className={`flex opacity-60 text-lg items-center gap-3 ${className}`}>
        <AiOutlineTwitter/>
        <FaLinkedinIn/>
        <BsFacebook/>
        <AiOutlineInstagram/>
        <AiFillYoutube/>
    </div>
  )
}

export default SocialIconsGroup