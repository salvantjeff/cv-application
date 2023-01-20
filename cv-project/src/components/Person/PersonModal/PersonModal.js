import React from "react";
import EditPersonForm from "../Forms/EditPersonForm";
import "./PersonModal.css";
import { GrClose } from "react-icons/gr";

export default function PersonModal({ 
    toggleModal, 
    person, 
    onChange,
    onSubmit 
}) {
    
    return (
        <div className="modal person-section">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <div className="modal-content__wrapper">
                    <div className="modal-form__header">
                        <h2 className="game-over_title">Profile</h2>
                        <div>
                            <button 
                                className="close-modal__button" 
                                onClick={toggleModal}
                            ><GrClose size='1.25rem' /></button>
                        </div>
                    </div>
                    <EditPersonForm 
                        person={person}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div> 
    );
};