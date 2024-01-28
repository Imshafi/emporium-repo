import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/images/logo.jpeg";
import "../assets/css/common/navbar.css";

import Accordion from 'react-bootstrap/Accordion';

import { SlUser } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

import CommonModal from "./CommonModal";
import CommonOverlay from './CommonOverlay';

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const Navbar = () => {

  const [isMenuIcon,setIsMenuIcon] = useState(true)
  // const [dataOnHover,setDataOnHover] = useState(false)
  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleMouseOver=(e)=>{
    setTarget(e.target)
    setShow(true)
  }

  const handleMouseOut=(e)=>{
    setShow(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className='navbar'>
      {/* {dataOnHover &&
            <CommonModal isOpen={dataOnHover} setIsOpen={setDataOnHover}>
              <div className='hover_menu'>
                <ul>
                  <li>Hello</li>
                </ul>
                <ul>
                  <li>Hai</li>
                </ul>
                <ul>
                  <li>Bye</li>
                </ul>
              </div>
              </CommonModal>
            } */}
      <div className='logo'>
        <img src={logo} alt='Internal Server Error...' />
        <div className='logo_txt'>
          <h3>SV</h3>
          <span>EMPORIUM</span>
        </div>
      </div>
      <div className={`${isMenuIcon ?'nav_items': 'nav_items active'}`}>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Photo Gallery</a>
          </li>
          <li className='overlay_parent'>
            {isMobileDevice ? 
              <Accordion>
              <Accordion.Item eventKey="0">
              <Accordion.Header>Products</Accordion.Header> 
              <Accordion.Body>
                <ul>
                  <li>
                    Hello
                  </li>
                  <li>
                    Hai
                  </li>
                  <li>
                    Hello
                  </li>
                </ul>
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              :
            <a href='#'
            onMouseOver={(e)=>handleMouseOver(e)}
            // onMouseOut={(e)=>handleMouseOut(e)}
            >Products</a>}
            {show &&
            <div ref={ref} className='overlay_items'>      
            <Overlay
              show={show}
              target={target}
              placement="bottom"
              container={ref}
              containerPadding={20}
              
            >
              <Popover id="popover-contained">
                <Popover.Body>
                <div className='hover_menu'>
                  <div>
                <ul>
                  <li>Hello</li>
                  <li>Hai</li>
                  <li>Bye</li>
                </ul>
                </div>
                <div>
                <ul>
                  <li>Hello</li>
                  <li>Hai</li>
                  <li>Bye</li>
                </ul>
                </div>
                <div>
                <ul>
                  <li>Hello</li>
                  <li>Hai</li>
                  <li>Bye</li>
                </ul>
                </div>
              </div>
                </Popover.Body>
              </Popover>
            </Overlay>
          </div>
          }
          
          </li>
          <li>
            <a href='#'>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='nav_icons'>
        <ul>
        <li onClick={()=>setIsMenuIcon(!isMenuIcon)}>
          {isMenuIcon ? <RiMenu2Line size={25} /> : <RxCross2 size={25} />}
          </li>
          <li>
            <SlUser size={20} />
          </li>
          <li>
            <CiSearch size={25} />
          </li>
          <li>
            <BsHandbag size={20} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar