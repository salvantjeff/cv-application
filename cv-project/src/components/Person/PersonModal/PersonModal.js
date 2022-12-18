import React from "react";
import EditPersonForm from "../Forms/EditPersonForm";
import "./PersonModal.css";

export default function PersonModal({ 
    modal, 
    toggleModal, 
    person, 
    onChange,
    onSubmit 
}) {
    
    return (
        <>
            {modal && (
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <div className="modal-content__wrapper">
                        <div className="modal-form__header">
                            <h2 className="game-over_title">Person info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
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
            )}
        </>
    );
};