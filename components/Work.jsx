import React from 'react'
import { workData,assets } from '@/assets/assets'
import Image from 'next/image'

const Work =()=>{
    return(
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
           Welcome to my web development portfolio! Explore a collection of
           projects that showcase my skills and expertise in Mecatronics Engineering.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {workData.map((project,index)=>(
                <div key={index} 
                className='aspect-square bg-cover bg-center  rounded-lg relative cursor-pointer group'
                style={{backgroundImage: `url(${project.bgImage})`}}>
                    <div className='bg-white w-10/12 rounded-md absolute buttom-5 left-1/2 -translate-x-1/2
                    py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>  
                    </div>
                    <div>
                        <Image src={assets.send_icon} alt="Send Icon" className='w-5'/>
                    </div>
                </div>
            ))}
        </div>




        </div>
    )
}
export default Work