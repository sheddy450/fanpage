import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import cha from '/public/cha.png'
import namjoo from '/public/NamJoo.jpg'
import {FiMenu} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
import Contact from './contact/index'

export default function Home() {

  const [showNav, setShowNav] = useState(false);
  return (
    <main className='w-[45em] md:w-[100%]'>
      <nav id='home' className=' md:px-3 flex md:items-center justify-between font-poppins lg:items-center h-[70px] shadow-lg w-[100%] text-gray-600 font-bold text-lg lg:text-2xl'>
        <h1 className=' text-amber-800 font-bold my-auto'>Namjoo Fan Club</h1>
    {showNav ? (
        <ul onClick={()=> setShowNav(!showNav)} className='fixed bg-black h-[25em] space-y-14 pl-5 w-[20em] text-white right-0 md:hidden md:space-x-10 pr-10'>
            <button className=' text-white p-5  text-3xl' onClick={()=> setShowNav(!showNav)}><RxCross2 className=' absolute right-5'/></button>
            <li className='text-2xl'><a href='#home'>Home</a></li>
            <li className='text-2xl'><a href="#about">About</a></li>
            <li className='text-2xl'><a href='#form'>Registration</a></li>
        </ul>
          ):(
            <ul className='hidden md:flex items-center md:space-x-10 pr-10'>
            <li><a href='#home'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href='#form'>Registration</a></li>
          </ul>)
        }

    <button className='md:hidden text-3xl' onClick={ ()=>setShowNav(!showNav)}><FiMenu/></button>
    </nav>
          <div id='home' className='lg:flex grid lg:grid-cols-2 items-center justify-evenly flex-wrap bg-gradient-to-b mt-10 h-[800px] lg:h-[80vh] from-white to-[#e6d2d2]'>
          <div className='md:pl-5'>
                <h1 className='text-6xl text-gray-800 max-w-sm'>NamJoo Fan club</h1>
                <p className='font-poppins mb-14 text-xl font-bold'>Exclusive access to joo's life</p>

                <a href='#form' className=' px-7 py-2 rounded-lg text-white font-poppins font-bold shadow-lg hover:text-2xl bg-[#9D5151]'>connect!</a>
            </div>
            <div>
                <div className='absolute z-2 h-[400px] w-[20em] border-2 rounded-2xl border-gray-700'></div>
                <div className='mx-auto relative -ml-7 mt-6'>
                    <Image src={cha} className='object-cover h-[350px] w-[20em] bg-[#9D5151] rounded-2xl' width={400} height={100}  alt='Namjoo'/>
                </div>
            </div>
          </div>
          {/* ------------------About------------- */}

          <section id='about' className='flex flex-wrap justify-around mx-3 pt-5 my-5'>
            <div>
                <Image src={namjoo} width={400} height={100} className='rounded-xl h-[40em] w-[30em]' alt='Namjoo'/>
            </div>
            <div>
                <h1 className='text-center text-2xl font-bold text-gray-600'>About</h1>
                <div className='max-w-lg font-poppins text-lg'>
                <p>Welcome to Nam Joo fan-based club!As a member of this fan club, you'll get exclusive access to all the latest updates, news, and behind-the-scenes glimpses of Nam Joo. By registering for the fan club, you'll be able to join a community of Nam fans from all around the world.</p><br/>

                  <p>You'll have the opportunity to connect with other fans, share your love for Nam, and even attend exclusive fan club events. You'll also have access to exclusive content that you won't find anywhere else. You'll be able to see photos and videos from Nam's Screen shows and events, and you'll get to watch new videos and see behind-the-scenes footage before anyone else. </p><br/>

                  <p>But perhaps the biggest benefit of being a member of the Nam Joo Fan Club is the opportunity to get closer to Nam herself. Members of the fan club have the chance to win meet-and-greet passes, attend private events with Nam, and even receive personal messages from him.To become a member of the Nam Joo Fan Club, simply fill out the registration form below. We can't wait to welcome you into the fan club community and share all the amazing experiences that come with being a Nam Joo fan</p>
                </div>

            </div>
          </section>
          {/* -------------Contact------------- */}

          <section id='form' className=' grid bg-gradient-to-b from-[#dfd4d4] to-white'>
            <h1 className='text-center font-poppins font-bold text-2xl my-2'>Registration</h1>
           <Contact/>
          </section>
          <section className='mt-10 pt-20 bg-gradient-conic from-[#573131] to-[#675454] h-[40vh] text-center font-poppins'>
            <h1 className='text-white text-2xl font-bold '>Get started with connecting to Nam Joo Fan Club</h1>
            <p className='text-white'>click the button below to register and stay connected with Nam joo</p>
            <button className='bg-white px-5 mt-10 hover:text-2xl py-2 mx-auto rounded-lg'><a href="#form">Click Here!</a></button>
          </section>
          <footer className='flex justify-between p-2 py-5 font-poppins'>
            <h1 className='font-bold text-[#9D5151] text-xl'>NamJoo Fanclub</h1>
            <ul className='flex space-x-5 font-bold'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#form">Registration</a></li>
            </ul>
          </footer>
    </main>
  )
}
