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

        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                <div>
                  <h2 className='font-bold text-2xl'>What kind of job are you interviewing for?</h2>
                  <h2>Add details about the job position, job description and years of experience</h2>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
                    <Button>Start Interview</Button>
                </div>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>

    </div>
  )
}

export default AddNewInterview