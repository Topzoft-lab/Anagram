import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './modal.css'
// let sadGif = require("../../assets/sad-gif.gif");
// let wellDoneGif = require("../../assets/well-done-emoji.gif");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    backgroundColor: '#7a5d7e',
    borderRadius: '2%'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const PopupModal = ({isOpen,modalGif,subMsg,msg,score,nextLabel,nextAction}) => {
  const [open, setOpen]= useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    setOpen(isOpen);
  },[isOpen])


  return (
    <div>
      <Modal
        isOpen={open}
        // onRequestClose={closeModal}
        style={customStyles}
      >
         
          <div className='img'><img className='modal-gif' src={modalGif} alt="wait until the page loads" /></div>
          <div className="sub-msg">{subMsg}</div>
          <div className="msg">{msg}</div>
          <div className='score-label'>Score: <span className="score"> {score}</span></div>
          <div className='form'>
            <button className='button' onClick={()=>{
              setOpen(false);
              navigate("./");              
              }}>Exit</button>
            <button className='button' onClick={nextAction}>{nextLabel}</button>
          </div>
      
       
      </Modal>
    </div>
  );
  }
export default PopupModal;
