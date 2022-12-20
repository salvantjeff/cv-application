import React from "react";
import EditSkillsForm from "../Forms/EditSkillsForm";

export default function SkillsModal({ 
    modal,
    toggleModal,
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
                        <EditSkillsForm 
                        
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};