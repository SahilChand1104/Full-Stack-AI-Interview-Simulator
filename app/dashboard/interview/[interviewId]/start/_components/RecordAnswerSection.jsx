import Image from 'next/image'
import React from 'react'
import Webcam from 'react-webcam'

function RecordAnswerSection() {
  return (
    <div>
        <Image src={'/webcam.png'} width ={700} height={500}
        className='absolute' />
        <Webcam/>

        
    </div>
  )
}

export default RecordAnswerSection