import React from 'react'
import Image from 'next/image'

export default function DivHabits({ day }:{ day : boolean | undefined }) {
  return (
    <div className='flex items-center justify-center w-9  h-9 '>
      <Image className='mr-3'
    src={"/images/not.png"} 
    alt='Logo-meta diaria' 
    width={15} 
    height={15}  
    />
    </div>
  )
}
