import Image from 'next/image'
import React from 'react'
import Webcam from 'react-webcam'

function RecordAnswerSection() {
  return (
    <div className='flex flex-col justify-center items-center bg-secondary rounded-lg p-5'>
        <Image src={'/webcam.png'} width ={200} height={200}
        className='absolute' />
        <Webcam/>

        
    </div>
  )
}

export default RecordAnswerSection