import React from 'react'
import Navbar from '../components/Navbar'
import tick from '../assets/images/tick.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import {useSelector} from "react-redux"
const Home = () => {
  const email = useSelector(state=>state.user.email)
  return (
    <div className=" flex text-center  flex-col ">
      <Navbar />
      <div className="flex h-[calc(100vh-62px)] flex-col w-full justify-center items-center">
        <div className="flex flex-col sm:px-10 px-5 md:w-[720px] mt-10 justify-center items-center">
          <h1 className="sm:text-[32px] text-[24px] font-bold mb-10">
            Please verify your email...
            {/* <img src={tick} className='bg-[#EA4B8A] h-6 rounded-full ' alt="" /> */}
          </h1>
          {/* <FontAwesomeIcon className='text-[80px]' icon={faEnvelope} /> */}
          <div className='relative'>

          <FontAwesomeIcon className='text-gray-400 text-[80px]' icon={faEnvelope} />
          <FontAwesomeIcon className='absolute right-[-10px] text-[20px] bg-[#EA4B8A] p-1 text-white rounded-full' icon={faCheck} />
          </div>
          <p className='mb-10 text-gray-400'>Please verify your email address. We have sent a confirmation email to: </p>
          <p className="font-bold mb-10 sm:text-xl text-md">{email}</p>
          <p className="mb-10 text-gray-400">Click the confirmation link in that email to begin using Dribble.</p>
          <p className='mb-10 text-gray-400'>Didn't reveive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-[#EA4B8A] cursor-pointer font-bold'>resent the confirmation email.</span></p>
          <p className='mb-20 text-gray-400'>Wrong email address? <span className='text-[#EA4B8A] cursor-pointer font-bold'>Change it.</span></p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home