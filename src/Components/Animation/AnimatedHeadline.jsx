import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Animation.css'

const AnimatedHeadline = () => {
  const [loop, setLoop] = useState(true);

  const props = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 37000 },
    loop: loop,
    onRest: () => setLoop(true),
  });

  useEffect(() => {
    if (loop) {
      setLoop(false);
    }
  }, [loop]);

  return (
    <div >
      <animated.div  className='anihead' style={props}>
        <div>
            Dietitian -
        </div>
        <div>Diet -</div>
        <div>
            Healthy Food -
        </div>
        <div>
          Homy -
        </div>
        <div>
          Homy Pro -
        </div>
        <div>
          Homy Pro Max -
        </div>
        <div>
          Professional Chefs -
        </div>
        <div>
          5 star Experience -
        </div>
        <div>
          Gourmet Multi-grain -
        </div>
        <div>
          Meal Planning -
        </div>
        <div>
          Deep Cleaning -
        </div>
        <div>
          Comfort -
        </div>
        <div>
          Calories -
        </div>
        <div>
          Nutritious fuels -
        </div>
        <div>
          Carbs -
        </div>
        <div>
          Fiber -
        </div>
        <div>
          Protein -
        </div>
        <div>
          Parties -
        </div>
        <div>
          Multicuisine -
        </div>
<div>
  Healthy Breakfast -
</div>
<div>
  Detox Juices -
</div>
<div>
  Top-notch -
</div>
<div>
  Skilled -
</div>
<div>
  Luxury 
</div>
        </animated.div>
    </div>
  );
};

export default AnimatedHeadline;
