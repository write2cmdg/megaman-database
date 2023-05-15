import React from 'react';
import spriteSheet from '/images/mech-fly.png';
import '../MechFlySprite.css'; // Import the CSS file for the component
 


const MechFlySprite = () => {
  return (
    <div id='sprite_container_mech-fly'>
      <div id='mech-fly'
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${spriteSheet})`,
          // animation: 'sprite-animation 0.25s steps(3) infinite',
          
        }}
      />
    </div>
  );
};

export default MechFlySprite;