import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
   <div style={{display:"flex" , justifyContent : "center" , alignItems :"center" }}>
     <div style={{background : "#444" , padding : "1rem" , borderRadius : "15px" }}>
      <h2 style={{color : "#fa4"}}>Not Found</h2>
      <p style={{color : "lightgray"}}>sorry ! the page are looking for does not found</p>
      <Link href={"/"} style={{color:"lightblue" , textDecoration : "none"}}>Go To Home Page</Link>
    </div>
   </div>
  )
}

export default notFound
