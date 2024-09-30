"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {

    const [interviewData, setInterviewData]=useState();
    const [webCamEnabled, setWebCamEnabled]=useState(false);

    useEffect(()=>{
        console.log(params.interviewId)
        GetInterviewDetails();

    }, [] )

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId))

        //console.log(result);
        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 '>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
        {webCamEnabled? <Webcam
        onUserMedia={()=>setWebCamEnabled(true)}
        onUserMediaError={()=>setWebCamEnabled(false)}
        mirrored={true}
        style={{
          height:300,
          width:300
        }} />
        :
        <>
        <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border'/>
        <Button onClick={()=>setWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
        </>
        
        }

        </div>
        <div className='flex flex-col my-5 gap-5'>
          <div className='flex flex-col my-5 gap-5 p-5 rounded-lg border'>
          <h2 className='text-lg'><strong>Job Position:</strong>{interviewData?.jobPosition || 'Loading...'}</h2>
          <h2 className='text-lg'><strong>Job Description:</strong>{interviewData?.jobDesc || 'Loading...'}</h2>
          <h2 className='text-lg'><strong>Years of Experience:</strong>{interviewData?.jobExperience || 'Loading...'}</h2>

          </div>
          <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-300'>
            <h2 className='flex gap-2 items-center'><Lightbulb/><strong>Information</strong></h2>
            <h2>Please enable your camera and microphone to start the interview sim. It has 5 questions and you will respond verbally. At the end their will be feedback and a grading of your responses. Microphone is mandatory but camera is not.</h2>
          </div>
        </div>
        </div>

        <div className='flex justify-end items-end'>
        <Button>Start Interview</Button>

        </div>
        


    </div>
  )
}

export default Interview