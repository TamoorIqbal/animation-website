import React from 'react'
import '../../App.css'
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
export const OurSpeciality = () => {
  const { keyframes, animationOptions } = pulse;

  const { ref, getAnimation } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      delay: 1000, // Delay 1s
      iterations: 1000,
      duration: animationOptions.duration * 0.75, // Speed up the animation
    },
  });
  return (
    <div>
      <div className="container text-center ">
        <div className="row m-3">
          <div className="col-sm-12" >
            <h1 className='m-4'  data-aos="zoom-in">OUR SPECIALITY</h1>
          </div>
          <div className="col-sm-12 ">
            <h3 className='mb-5' >Gamica Cloud's best action to implement is giving exactly what the clients demand.</h3>
          </div>

        </div>
      </div>
      <div className="container m-auto" >
        <div className="row " >
          <div data-aos="flip-left" className="col-xs-12 col-sm-6 col-md-6 col-lg-3 m-auto" >
            <div className="card"  >
              <img src="block.svg" className='specImage' alt="..."/>
              <h4 style={{color:'black',textAlign:'center'}}>Customized Solutions</h4>
             
            </div>
          </div>
          <div data-aos="flip-right" className="col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="card" >
              <img src="services.svg" className='specImage' alt="..."/>
              <h4 style={{color:'black',textAlign:'center'}}>Customized Solutions</h4>
             
            </div>
          </div>
          <div data-aos="flip-up" className="col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="card" >
              <img src="cycle.svg" className='specImage' alt="..."/>
              <h4 style={{color:'black',textAlign:'center'}}>Customized Solutions</h4>
             
            </div>
          </div>
          <div data-aos="flip-down" className="col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
          <div className="card" >
              <img src="block.svg" className='specImage' alt="..."/>
              <h4 style={{color:'black',textAlign:'center'}}>Customized Solutions</h4>
             
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
