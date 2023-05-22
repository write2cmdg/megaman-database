import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[200px] w-screen overflow-hidden">
        <img
          className="-z-10 object-cover 2xl:h-[200px] xl:h-[175px] lg:h-[150px] md:h-[125px] sm:h-[100px] h-[75px] w-screen aspect-[30/2] fixed bottom-0 right-0"
          src="../images/waterBg.png"
        />

        <img
          className="-z-10 fixed bottom-0 right-0 object-cover w-[225px] 2xl:w-[450px] xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250]"
          src="../images/footerMegaman.png"
        />
      </div>
    </>
  );
};

export default Footer;
