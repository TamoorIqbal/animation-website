import React from 'react'
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
export const Services = () => {
  const { keyframes, animationOptions } = bounce;
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
            <h1 className='mb-4' data-aos="zoom-in">OUR SERVICES</h1>
          </div>
          <div className="col-sm-12 ">
            <h3 className='mb-5' >Gamica Cloud is providing the best services and solutions for emerging technologies.
              Here are the major services we're providing:</h3>
          </div>

        </div>
      </div>
      <div className="container text-center">
        <div className="row m-3" >
          <div className="col-sm-12 col-md-6 " style={{ textAlign: "left" }} data-aos="fade-right">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Blockchain Development
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p> Gamica Cloud is providing best Blockchain Development Services. We strives to bring powerful and revolutionary aspects of the blockchain technology to build innovative, decentralized applications that meet your varied business needs our team has a deep experience in Blockchain Development Industry.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Website & Web Application Development
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Gamica Cloud design, build, support, and evolve all types of Websites and Web-based Applications. We provide intuitive navigation and responsive websites and applications. We design trends with corporate styles to foster brand recognition.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Mobile Application Development
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Gamica Cloud's Mobile App development services help build apps for iOS and Android devices. We create and deploy fast, bug-free & well-documented mobile applications. Our mobile app developers have over a decade-long expertise in building solutions that meet market needs, empower companies, brand identity, and encourage business growth and expansion.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    E-Commerce Development
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Gamica Cloud is providing great services for E-Commerce Store Development. We have experts who design your ecommerce storefront to be both functional and beautiful. We make it easy for customers to find what they want, whether through filtering by size, color or price.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Custom Software Development
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>We build software that automates enterprise-wide processes and covers interdepartmental information flows, and may also include transactions with customers, vendors and partners. We build custom applications that help your organization deliver tailored customer experiences to win the market competition. Gamica Cloud has experties to develop CRM, inventory management, financial management software etc.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    IT Consultancy
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Gamica Cloud is providing Information Technology (IT) consulting services that help you shape a winning IT strategy. Gamica Cloud can expertly guide your IT and digital transformation initiatives from strategy to implementation.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mt-3" data-aos="fade-left">
            <img src="image2.svg" ref={ref}
              onMouseOver={() => getAnimation().play()}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
