import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";

export const Home = () => {

  // const { ref } = useWebAnimations({
  //   keyframes: [
  //     { transform: "translateY(-50px)" },
  //     { transform: "translateY(10px)" },
  //   ],
  //   timing: {
  //     delay: 500, // Start with a 500ms delay
  //     duration: 1000, // Run for 1000ms
  //     // iterations: Infinity, // Repeat once
  //     // direction: "alternate", // Run the animation forwards and then backwards
  //     easing: "ease-in-out", // Use a fancy timing function
  //   },
  // });
  const { ref } = useWebAnimations({
    keyframes: {
      transform: "translateY(-80px)" ,
      transform: "translateY(10px)", 
    },
    animationOptions: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 1000, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });



  return (
    <div style={
      {
        backgroundImage: 'url("homeBg.png")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: '80vh'
      }
    }  >
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-12 mt-5 mb-5" >
            <h3 data-aos="zoom-in" >LET'S BE DECENTRALIZED</h3>
        
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col mt-5"  >
            <img  src='bg.png' ref={ref}
              style={{
                marginTop: '60px',
                width: '300px'
              }}

            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}
