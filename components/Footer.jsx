import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.seid} alt="logo" className="w-32 mx-auto mb-2"/>
            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt="mail icon" className="w-6"/>
            fikreselassieeshetu.seid@etud.univ-evry.fr
            </div>
        </div>
        <div className=" text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] py-6 mt-6">
            <p>© 2025 Seid Fikireselassie Eshetu. All rights reserved.</p>
            <ul className='flex items-center  justify-center gap-10 mt-4 sm:mt-0'>
                <li>
                  <a target='_blank' href='https://github.com/Seid-21'> Github</a>  
                </li>
                <li>
                  <a target='_blank' href='https://www.linkedin.com/in/fikreselassie-seid/'> Linkedin</a>  
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Footer