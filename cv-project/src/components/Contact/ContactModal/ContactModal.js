import React from "react";
import EditContactForm from "../Forms/EditContactForm";
import { GrClose } from 'react-icons/gr';
import './ContactModal.css';

export default function ContactModal({ 
    modal,
    toggleModal,
    contacts,
    onChange,
    onSubmit
}) {
    
    return ( 
        <div className="modal contact-section">
            <div className="overlay contact-section" onClick={toggleModal}></div>
            <div className="modal-content">
                <div className="modal-content__wrapper">
                    <div className="modal-form__header">
                        <h2 className="game-over_title">Contact Info</h2>
                        <div>
                            <button 
                                className="close-modal__button" 
                                onClick={toggleModal}
                            ><GrClose size='1.25rem' /></button>
                        </div>
                    </div>
                    <EditContactForm 
                        contacts={contacts}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div> 
    );
};