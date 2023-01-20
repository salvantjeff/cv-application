import React from "react";
import EditSkillsForm from "../Forms/EditSkillsForm";
import { GrClose } from 'react-icons/gr';

export default function SkillsModal({ 
    modal,
    toggleModal,
    onChange,
    skills,
    onSubmit
}) {
    return (
        <>
            {modal && (
            <div className="modal skills-section">
                <div className="overlay skills-section" onClick={toggleModal}></div>
                <div className="modal-content">
                    <div className="modal-content__wrapper skills-section">
                        <div className="modal-form__header">
                            <h2 className="game-over_title">Skills info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                ><GrClose size='1.25rem' /></button>
                            </div>
                        </div>
                        <EditSkillsForm 
                            onChange={onChange}
                            skills={skills}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};