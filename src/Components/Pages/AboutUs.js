import React from 'react'
import useWebAnimations, { flip } from "@wellyshen/use-web-animations";

export const AboutUs = () => {

  const { keyframes, animationOptions } = flip;
  const { ref, getAnimation } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 1000, // Delay 1s
      // iterations: 1000,
      duration: animationOptions.duration * 0.75, // Speed up the animation
    },
  });
  return (
    <div>
      <div className="container text-center ">
        <div className="row m-3">
          <div className="col-sm-12" >
            <h1 className='m-4' data-aos="zoom-in">ABOUT US</h1>
          </div>
          <div className="col-sm-12 ">
            <h3 className='mb-3' >Build the chain of modern technologies with Gamica Cloud</h3>
          </div>

        </div>
      </div>
      <div className="container text-center">
        <div className="row m-5">
          <div className="col-sm-12 col-md-6 " data-aos="fade-right"
          ref={ref} onMouseOver={() => getAnimation().play()}
          >
            <img src="image1.svg" />
          </div>
          <div data-aos="fade-left" className="col-sm-12 col-md-6 " style={{textAlign:"left"}}>

            <h3 className='mt-3'  >Gamica Cloud</h3>
            <p style={{textAlign:"left"}}>is a Software Development Company which especially deals in latest innovative Services and Solutions.<br/>

            Gamica Cloud is dealing in several emerging technologies and majorly we’re working on Blockchain Development. We have a vision that strives to bring powerful and revolutionary aspects of blockchain technology to build innovative, decentralized applications that meet your varied business needs.<br/>

            Gamica Cloud has the most talented Blockchain experts. We help you secure and validate ownership of your digital assets and decentralize your network to manage your data with smart contracts. Our Team has a deep experience in Blockchain Development Industry.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
