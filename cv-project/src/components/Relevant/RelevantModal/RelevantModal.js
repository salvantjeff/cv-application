import React from "react";
import EditRelevantForm from "../Forms/EditRelevantForm";
import './RelevantModal.css';

export default function RelevantModal({ 
    modal,
    toggleModal,
    relevantExps,
    onChange,
    index,
    onSubmit,
    onClick
}) {
    
    return (
        <>
            {modal && (
            <div className="modal rel">
                <div className="overlay rel" onClick={toggleModal}></div>
                <div className="modal-content rel">
                    <div className="modal-content__wrapper rel">
                        <div className="modal-form__header rel">
                            <h2 className="game-over_title rel">Relevant Exp info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <EditRelevantForm 
                            onChange={onChange}
                            relevantExps={relevantExps}
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