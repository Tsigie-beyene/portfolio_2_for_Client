import { assets } from '@/assets/assets'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} alt="Profile Image" className="rounded-full w-32"/>
        </div>
        <h3>
            Hi! I'm Seid Fikreselassie <Image src={assets.hand_icon} alt="Hand Icon" className="w-6"/>
        </h3>
    </div>
  )
}

export default Header