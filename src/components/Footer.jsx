import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=" w-screen overflow-hidden"> 
    <img className="-z-20 object-cover h-[150px] w-screen aspect-[30/2] absolute sm:bottom-0 bottom-[-75px] right-0" src='../images/waterBg.png' />
    <img className="-z-10 absolute sm:bottom-0 bottom-[-75px] right-0 object-cover w-[325px]" src='../images/footerMegaman.png' />
    </div>
    </>
  )
}

export default Footer