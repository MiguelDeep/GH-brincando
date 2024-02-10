import React from 'react'
import Image from 'next/image'

export default function DivLogo() {
  return (
    <div className='flex flex-col-2 items-center'>
    <Image src={'/images/checked-11.png'} alt='Logo-meta diaria' width={30} height={30} />
    <Image src={'/images/meta-diria.svg'} alt='Logo-meta diaria' width={200} height={200} />
  </div>
  )
}
