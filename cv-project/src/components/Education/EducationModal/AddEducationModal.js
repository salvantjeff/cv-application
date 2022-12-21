import React from "react";
import AddEducationForm from "../Forms/AddEducationForm";

export default function AddEducationModal({ 
    modal,
    toggleModal,
    education,
    onChange,
    index,
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
                            <h2 className="game-over_title">Add new Education</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <AddEducationForm 
                            // education={education}
                            // onChange={onChange}
                            // index={index}
                            // onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};