import React from "react";
import EditEducationForm from "../Forms/EditEducationForm";

export default function EducationModal({ 
    modal,
    toggleModal 
}) {
    
    return (
        <>
            {modal && (
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <div className="modal-content__wrapper">
                        <div className="modal-form__header">
                            <h2 className="game-over_title">Education info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <EditEducationForm 
                        
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};