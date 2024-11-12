import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.scss'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import Swal from 'sweetalert2'
import {motion} from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'
// import { navVariants, staggerContainer } from '../../../../starter_repo/utils/motion'


const Residencies = () => {
  const { isAuthenticated } = useAuth0();
    const BookProduct = ()=>{
      if(isAuthenticated!=true)
        {
          Swal.fire({
            title: 'Please Login to Contact Us.',
            text: 'Thanks For Showing Your Intrese In This Property.',
            imageUrl: './jason-dent-w3eFhqXjkZE-unsplash.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        }
        else
        {
          Swal.fire({
            title: ' Our Agent will Contact You Soon',
            text: 'Thanks For Showing Your Intrese In This Property.',
            imageUrl: './jason-dent-w3eFhqXjkZE-unsplash.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        }
    }
  return (
    <section className="r-wrapper" id='Residencies'>
        <div className="paddings innerWidth r-container">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{duration: 2.5, type: "spring"}}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: "-7rem", opacity:0 }
            }}
            className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </motion.div>

            <Swiper {...sliderSettings}>
            {/* <SliderButton /> */}
                {
                    data.map((card, i)=>(
                        <SwiperSlide key={i}>
                            <div className="r-card flexColStart">
                            <motion.img 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{duration: 3, type: "spring"}}
                            variants={{
                              visible: { y: 0, opacity: 1 },
                              hidden: { y: "-7rem", opacity:0 }
                            }}
                            src={card.image} alt="home"/>

                            <motion.span 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{duration: 3, type: "spring"}}
                            variants={{
                              visible: { y: 0, opacity: 1 },
                              hidden: { y: "5rem", opacity:0 }
                            }}
                            classNameName="secondaryText r-price">
                                    <span style={{color:"orange"}}>$</span>
                                    <span>{card.price}</span>
                                </motion.span>
                                
                                <motion.span 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                transition={{duration: 4, type: "spring"}}
                                variants={{
                                  visible: { y: 0, opacity: 1 },
                                  hidden: { y: "5rem", opacity:0 }
                                }}
                                className='primaryText'>{card.name}</motion.span>
                                <button className='button btn' onClick={BookProduct}>Book Now</button>
                                <span className='secondaryText detail'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies


// const SliderButton = ()=> {
//     const swiper = useSwiper();
//     return (
//         <div classNameName="r-buttons flexCenter">
//         <buttons onClick={()=> swiper.slidePrev()}>&lt;</buttons>
//         <buttons onClick={()=> swiper.slideNext()}>&gt;</buttons>
//         </div>
//     );
// };
