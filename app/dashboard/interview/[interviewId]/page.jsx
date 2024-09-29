"use client"
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

function Interview({params}) {

    const [interviewData, setInterviewData]=useState();

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
    <div className='my-10 flex justify-center flex-col items-center'>
        <h2 className='font-bold text-2xl'>Let's Get Started</h2>
    </div>
  )
}

export default Interview