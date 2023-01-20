import React from "react";
import AddSkillsForm from "../Forms/AddSkillsForm";
import { GrClose } from "react-icons/gr";

export default function AddSkillsModal({ 
    toggleModal,
    onChange,
    addNewSkills,
    onSubmit
}) {
    return (
        <div className="modal add-skills-section">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
                <div className="modal-content__wrapper">
                    <div className="modal-form__header">
                        <h2 className="game-over_title">Skills info</h2>
                        <div>
                            <button 
                                className="close-modal__button" 
                                onClick={toggleModal}
                            ><GrClose size='1.25rem' /></button>
                        </div>
                    </div>
                    <AddSkillsForm 
                        onChange={onChange}
                        addNewSkills={addNewSkills}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div> 
    );
};