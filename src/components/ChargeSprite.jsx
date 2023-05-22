import React from "react";
import spriteSheet from "/images/mm-charge6000x750.png";
import "../MechFlySprite.css"; // Import the CSS file for the component

const ChargeSprite = () => {
  return (
    <div id="sprite_container_charge">
      <div
        id="charge"
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${spriteSheet})`,
          // animation: 'sprite-animation 0.25s steps(3) infinite',
        }}
      />
    </div>
  );
};

export default ChargeSprite;
