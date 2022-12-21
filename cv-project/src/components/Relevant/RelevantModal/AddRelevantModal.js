import React from "react";
import './RelevantModal.css';
import AddRelevantForm from "../Forms/AddRelevantForm";

export default function AddRelevantModal({ 
    modal,
    toggleModal,
    addNewRelevantExp,
    onChange,
    onSubmit
}) {
    
    return (
        <>
            {modal && (
            <div className="modal rel">
                <div className="overlay rel" onClick={toggleModal}></div>
                <div className="modal-content rel">
                    <div className="modal-content__wrapper rel">
                        <div className="modal-form__header rel">
                            <h2 className="game-over_title rel">Add Relevant Exp</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <AddRelevantForm 
                            onChange={onChange}
                            addNewRelevantExp={addNewRelevantExp}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};