import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=" w-screen overflow-hidden"> 
    <h1 className="absolute bottom-4 text-2xl" >megaman database</h1>
    <img className="object-cover h-[150px] w-screen aspect-[30/2] absolute bottom-0 right-0" src='../images/waterBg.png' />
    <img className="z-100 absolute bottom-0 right-0 object-cover w-[325px]" src='../images/footerMegaman.png' />
    </div>
    </>
  )
}

export default Footer