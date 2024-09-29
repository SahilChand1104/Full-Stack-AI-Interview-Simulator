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
  

function AddNewInterview() {
    const [openDialog, setOpenDialog]=useState(false)
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
              <form>
                <div>
                  
                  <h2>Add details about the job position, job description and years of experience</h2>

                  <div className='mt-7 my-3'>
                    <label>Job Position</label>
                      <Input placeholder = "Ex. Software Engineer" required />
                  </div>
                  <div className='my-3'>
                    <label>Job Description</label>
                      <Textarea placeholder = "Ex. Experience with Java, Python " required />
                  </div>
                  <div className=' my-3'>
                    <label>Years of Experience</label>
                      <Input placeholder = "Ex. 2" type = "number" max="60" required/>
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