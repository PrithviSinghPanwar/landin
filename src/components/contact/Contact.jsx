import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
import { motion } from 'framer-motion'
const Contact = () => {
    return (
        <section className="c-wrapper" id='Contact'>
            <div className="padding innerWidth flexCenter c-container">
                {/* left side */}
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{duration: 3, type: "spring"}}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: "-7rem", opacity:0 }
                }}
                className="c-left flexColStart">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to Contact</span>
                    <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

                    <div className="contactModes flexColStart">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="mode flexColCenter ">
                                <div className="flexStart">
                                    <div className="icon flexCenter ">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 456 17</span>
                                    </div>
                                </div>
                                <div className="button flexCenter">Call Now</div>
                            </div>

                            {/* second mode */}
                            <div className="mode flexColCenter ">
                                <div className="flexStart">
                                    <div className="icon flexCenter ">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>021 123 456 17</span>
                                    </div>
                                </div>
                                <div className="button flexCenter">Chat Now</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* right side */}
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{duration: 2.5, type: "spring"}}
                variants={{
                  visible: { x: 0, opacity: 1 },
                  hidden: { x: "7rem", opacity:0 }
                }}
                className="c-right flexEnd">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="img" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
