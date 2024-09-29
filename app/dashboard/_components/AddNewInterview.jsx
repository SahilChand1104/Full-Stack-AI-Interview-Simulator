"use client"
import React, {useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
  

function AddNewInterview() {
    const [openDialog, setOpenDialog]=useState(false)
    const [jobPosition, setJobPosition] = useState(false);
    const [jobDescription, setJobDescription] = useState(false);
    const [jobExperience, setJobExperience] = useState(false);

    const onSubmit = async(e)=>{
      e.preventDefault()
      console.log(jobPosition, jobDescription, jobExperience);

      const InputPrompt = "Job Position: "+jobPosition+", Job Description: "+jobDescription+", Years of Experience: "+jobExperience+", Depends on Job Position, Job Description and Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview Questions along with Answer in JSON format, Give us questions and answer field in JSON "

      const result = await chatSession.sendMessage(InputPrompt);

      console.log(result.response.text());
    }


  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={()=>setOpenDialog(true)}
        >
            <h2 className='font-bold text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDialog}>

        <DialogContent className="max-w-2xl">
            <DialogHeader>
            <DialogTitle className="text-2xl">What kind of job are you interviewing for</DialogTitle>
            <DialogDescription>
              <form onSubmit ={onSubmit}>
                <div>
                  
                  <h2>Add details about the job position, job description and years of experience</h2>

                  <div className='mt-7 my-3'>
                    <label>Job Position</label>
                      <Input placeholder = "Ex. Software Engineer" required onChange={(event)=>setJobPosition(event.target.value)}/>
                  </div>
                  <div className='my-3'>
                    <label>Job Description</label>
                      <Textarea placeholder = "Ex. Experience with Java, Python " required onChange={(event)=>setJobDescription(event.target.value)} />
                  </div>
                  <div className=' my-3'>
                    <label>Years of Experience</label>
                      <Input placeholder = "Ex. 2" type = "number" max="80" required onChange={(event)=>setJobExperience(event.target.value)}/>
                  </div>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button type = "button" variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                    <Button type = "submit">Start Interview</Button>
                </div>
                </form>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview