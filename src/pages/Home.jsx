import React from 'react'
import Navbar from '../components/Navbar'
import tick from '../assets/images/tick.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className=" flex text-center  flex-col ">
      <Navbar />
      <div className="flex h-[calc(100vh-62px)] flex-col w-full justify-center items-center">
        <div className="flex flex-col w-[720px] mt-10 justify-center items-center">
          <h1 className="text-[32px] font-bold mb-10">
            Please verify your email...
            {/* <img src={tick} className='bg-[#EA4B8A] h-6 rounded-full ' alt="" /> */}
          </h1>
          <FontAwesomeIcon className='text-[100px]' icon={faEnvelope} />
          <p className='mb-10 text-gray-600'>Please verify your email address. We have sent a confirmation email to: </p>
          <p className="font-bold mb-10 text-xl">account@gmail.com</p>
          <p className="mb-10 text-gray-600">Click the confirmation link in that email to begin using Dribble.</p>
          <p className='mb-10 text-gray-600'>Didn't reveive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-[#EA4B8A] font-bold'>resent the confirmation email.</span></p>
          <p className='mb-20 text-gray-600'>Wrong email address? <span className='text-[#EA4B8A] font-bold'>Change it.</span></p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home