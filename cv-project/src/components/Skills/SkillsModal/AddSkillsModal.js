import React from "react";
import AddSkillsForm from "../Forms/AddSkillsForm";

export default function AddSkillsModal({ 
    modal,
    toggleModal,
    onChange,
    addNewSkills,
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
                            <h2 className="game-over_title">Skills info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <AddSkillsForm 
                            onChange={onChange}
                            addNewSkills={addNewSkills}
                            // onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};