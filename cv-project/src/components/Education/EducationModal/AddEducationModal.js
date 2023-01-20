import React from "react";
import AddEducationForm from "../Forms/AddEducationForm";
import { GrClose } from 'react-icons/gr';

export default function AddEducationModal({ 
    toggleModal,
    addNewEducation,
    onChange,
    onSubmit
}) {
    return (
        <div className="modal add-education-section">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <div className="modal-content__wrapper">
                    <div className="modal-form__header">
                        <h2 className="game-over_title">Add new Education</h2>
                        <div>
                            <button 
                                className="close-modal__button" 
                                onClick={toggleModal}
                            ><GrClose size='1.25rem' /></button>
                        </div>
                    </div>
                    <AddEducationForm 
                        addNewEducation={addNewEducation}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div> 
    );
};