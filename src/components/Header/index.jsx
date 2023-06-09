import React from 'react'
import "./style.css"
import myImage from "../../assets/images/pub.png"
function Header() {
  return (
    <div className='navigating-pictures'>
       <h1>Deal your products<br/> with Ease</h1> 
       <img src={myImage}/>
    </div>
  )
}

export default Header