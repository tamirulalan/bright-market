import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'
import React from 'react'
// import './footer.css'
const Footer = () => {
  return (
    <footer className='Footer'>
      <h4>FIND US ON</h4>
      <div className="footer__socials">
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://Twitter.org'><BsTwitter/></a>
        <a href='https://Instagram.org'><BsInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tamiru Taye. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer