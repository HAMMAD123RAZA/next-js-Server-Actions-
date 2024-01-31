"use client"

import { useState } from "react"

const PostData = () => {
    const [formData,setformData]=bodyseState({
        title:"" ,
        body:"",
    })

    const handleChange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        
    }
    
  return (
    <>
      <form action=""  onSubmit={handleSubmit} >
        <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange}   />
        <input type="text" name="body" placeholder="body" value={formData.body} onChange={handleChange}   />
        <button type="submit" >sumit</button>
      </form>
    </>
  )
}

export default PostData
