import React from 'react';
import Modal from 'react-modal';
import '../App.css'
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
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'black',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
  },
};

const ConfirmationDialog = ({ isOpen, message, onConfirm, onCancel }) => {
  return (
    

    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Confirmation Dialog"
      style={customModalStyle}
      shouldCloseOnOverlayClick={false}
    >
      <Background backgroundImage={require('../assets/img/confirmation-dialog-background.jpg')}>
        <div>
              <p className="White-text Eerie-text Normal-text">{message}</p>
              <BreakLine quantity={1}/>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <EerieButton onClick={onConfirm} value="confirm" text="Confirm" />
                <BreakLine quantity={1}/>
                <EerieButton onClick={onCancel} value="cancel" text="Cancel" />
              </div>

        </div>
      </Background>
    </Modal>
  );
};

export default ConfirmationDialog;
