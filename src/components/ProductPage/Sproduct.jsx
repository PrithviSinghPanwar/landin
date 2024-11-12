import React, {useState} from 'react'
import data from "./data";
import './Sproduct.scss'
import {motion} from 'framer-motion'
import {useParams} from 'react-router-dom'

import {BiBed, BiBath, BiArea} from 'react-icons/bi'

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAuth0 } from '@auth0/auth0-react';

const Sproduct = () => {
  const { isAuthenticated } = useAuth0();
  
  const [filter, setFilter] = useState('')

  const searchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch = data.cardData.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })

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
  
    // console.log("hello");
}


  const listItems = dataSearch.map((item) =>
        <div className="card" key={item.id}>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{duration: 2, type: "spring"}}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: "-7rem", opacity:0 }
            }}
            className="card_img">
                <img src={item.thumb} />
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{duration: 2, type: "spring"}}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: "5rem", opacity:0 }
            }}
            className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn1" onClick={BookProduct}>Book Now</div>
            </motion.div>
        </div>

    );
    return (
      <>
      <span className='primaryText pt flexColCenter'>PROPERTIES</span>
        <div className="main_content">
          <div className="search-bar flexCenter">
              <input type="text" name='submit' className='form-control' value={filter} onChange={searchText.bind(this)} placeholder='Search Property'/>
              <button className='button' type='submit'>Search</button>
            </div>
            {listItems}
        </div>
        </>
    )
}

export default Sproduct

