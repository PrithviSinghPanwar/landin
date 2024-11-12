import React from 'react'
import './Hero.css'
import CountUp from "react-countup"
import {motion} from 'framer-motion'
// import { slideIn } from '../../../../starter_repo/utils/motion'

const Hero = () => {
  
  return (
    <section className="hero-wrapper">
      <div className="hero-container flexCenter innerWidth paddings">

        <div className="hero-left flexColStart">
          <div className="hero-title">
            <motion.h1
            // initial={{y: "5rem", opacity:0}}

            // animate={{y: 0, opacity: 1}}
            initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{duration: 2.5, type: "spring"}}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: "5rem", opacity:0 }
          }}
            style={{color:"white"}}
            >
              Discover <br />
              Most Suitable <br />Property
            </motion.h1>
          </div>
          <div className="hero-des flexColStart">
            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you </span>
          </div>

            {/* <div className="search-bar flexCenter">
              <input type="text" />
              <button className='button'>Search</button>
            </div> */}
            <div className="flexCenter stats">
              <div className="flexColStart stat">
                <span>
                  <CountUp start={0} end={80} duration={4} style={{fontSize:"2rem"}}/>
                <span style={{color:"orange"}} className='plus'>+</span>
                </span>
                <span className='secondaryText'>Premium Product</span>
              </div>
              <div className="flexColStart stat">
                <span>
                  <CountUp start={100} end={180} duration={4} style={{fontSize:"2rem"}}/>
                <span style={{color:"orange"}} className='plus'>+</span>
                </span>
                <span className='secondaryText'>Happy Customer's</span>
              </div>
            </div>

        </div>
                {/* RIGHT SIDE */}
        <div className=" flexCenter hero-right">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{duration: 2.5, type: "spring"}}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: "7rem", opacity:0 }
          }}
          className="image-container">
            <img src="./Hero2.jpg" alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

