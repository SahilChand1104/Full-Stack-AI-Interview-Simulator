"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';

function StartInterview({params}) {

    const [interviewData, setInterviewData]=useState();
    const [mockInterviewQuestion, setMockInterviewQuestion]=useState();
    const[activeQuestionIndex, setActiveQuestionIndex]=useState(0);
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
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <QuestionSection 
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            
            />

        </div>

    </div>
  )
}

export default StartInterview