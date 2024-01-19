import React from 'react';
import Modal from 'react-modal';
import EerieButton from '../components/EeerieButton.js';
import BreakLine from './BreakLine.js';
import Background from './Background.js';

const customModalStyle = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '30%',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'black',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
  },
};

const AlertDialog = ({ isOpen, message, onCancel }) => {
  return (
    

    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Alert Dialog"
      style={customModalStyle}
      shouldCloseOnOverlayClick={false}
    >
      <Background backgroundImage={require('../assets/img/alert_dialog_background.jpg')}>
        <div>
            <p className="White-text Eerie-text Normal-text">{message}</p>
            <BreakLine quantity={1}/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
              <EerieButton onClick={onCancel} text="Close" />
            </div>
        </div>
      </Background>
    </Modal>
  );
};

export default AlertDialog;
