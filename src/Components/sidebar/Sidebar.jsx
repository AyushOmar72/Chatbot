import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import "./Sidebar.css"


function Sidebar() {

const[extend,setExtend]=useState(false)
  return (
    <div className='sidebar'>

<GiHamburgerMenu id='ham' onClick={function() {setExtend(prev=>!prev)}} />
<div className='newchat' >

    
   <  FaPlus />
  {extend?<p>New chat</p>:null}
  </div>
  <div className="recent">
  <FiMessageSquare />
  {extend?<p>Who are you</p>:null}


  </div>
    </div>
  )
}

export default Sidebar
