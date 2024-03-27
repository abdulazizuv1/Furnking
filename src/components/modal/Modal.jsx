import React from 'react'
import "./Modal.css"
import { IoCloseSharp } from "react-icons/io5";

function Modal({visible, toggleModal}) {
    const modalStyle = {
        right: visible ? '0px' : '-1600px',
      };
  return (
    <div className="modal" style={modalStyle}>
        <div className="container2">
            <div className="panel">
              <IoCloseSharp onClick={toggleModal}  className='icon'/>
              <form  className='panel_form' action="">
                <input className='panel_input1' type="text"  placeholder='Login'/>
                <input className='panel_input2' type="text" placeholder='Password'/>
                <button className='panel_btn'>LOGIN</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Modal