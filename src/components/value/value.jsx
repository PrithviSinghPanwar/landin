import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './value.css'
import data from '../../utils/accordion'
import { motion } from 'framer-motion'
// import { slideIn, staggerContainer, fadeIn } from '../../../../starter_repo/utils/motion'

const value = () => {
  return (
    <section className='v-wrapper' id='Value'>
      <div className="padding innerWidth flexCenter v-container">
        {/* left side */}
        <div
        className="v-left">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{duration: 2.5, type: "spring"}}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: "-7rem", opacity:0 }
          }}
          className="image-container">
            <img src="./value.png" alt="img" />
          </motion.div>
        </div>
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
        className="v-right flexColStart">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give To You</span>
          <span className='secondaryText'>
          We always ready to help by providijng the best services for you.
          <br />
          We beleive a good blace to live can make your life better
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]}
          >
            {
              data.map((item, i)=>{
                const [className, setClassName] = useState(null)
                return(
                  <AccordionItem
                  className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      
                      <AccordionItemButton className='accordionButton flexCenter'>


                        <AccordionItemState>
                          {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                        </AccordionItemState>

                        <div className="flexCenter icon">{item.icon}</div>
                        <span className='primaryText'>
                          {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryTxt">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>

        </motion.div>
      </div>
    </section>
  )
}

export default value




