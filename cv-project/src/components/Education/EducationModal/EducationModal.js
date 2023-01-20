import React from "react";
import EditEducationForm from "../Forms/EditEducationForm";
import { GrClose } from 'react-icons/gr';

export default function EducationModal({ 
    modal,
    toggleModal,
    education,
    onChange,
    index,
    onSubmit,
    onClick
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
                                ><GrClose size='1.25rem' /></button>
                            </div>
                        </div>
                        <EditEducationForm 
                            education={education}
                            onChange={onChange}
                            index={index}
                            onSubmit={onSubmit}
                            onClick={onClick}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};