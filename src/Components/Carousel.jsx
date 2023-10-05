'use client'
import { useState } from "react"
import React from 'react'

export default function Carousel() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const data = ['roshan','dalami','sunar']
    const gotonext = ()=>{
        setCurrentIndex(currentIndex+1)
    }
    const gotoprev = ()=>{
        setCurrentIndex(currentIndex-1)
    }

  return (
    <div>
        <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={gotoprev} >prev</button>
        <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={gotonext} >next</button>
        <div>
        {
            data.map((item,index)=>{
                return(
                    <h1 key={index}>{item}</h1>
                )
            })
        }
        </div>

    </div>
  )
}
