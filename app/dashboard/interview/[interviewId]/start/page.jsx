"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'

function StartInterview({params}) {

    const [interviewData, setInterviewData]=useState();
    const [mockInterviewQuestion, setMockInterviewQuestion]=useState();
    useEffect(()=>{
        GetInterviewDetails();

    }, []);

    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId))

        //console.log(result);
        const jsonMockResp=JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0]);
        
    }


  return (
    <div>StartInterview</div>
  )
}

export default StartInterview