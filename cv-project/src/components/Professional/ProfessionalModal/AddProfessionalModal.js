import React from "react";
import './ProfessionalModal.css';
import AddProfessionalForm from "../Forms/AddProfessionalForm";

export default function AddProfessionalModal({ 
    modal,
    toggleModal,
    addNewProfessional,
    onChange,
    onSubmit
}) {
    return (
        <>
            {modal && (
            <div className="modal prof">
                <div className="overlay prof" onClick={toggleModal}></div>
                <div className="modal-content prof">
                    <div className="modal-content__wrapper prof">
                        <div className="modal-form__header prof">
                            <h2 className="game-over_title prof">Add Professional Exp</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <AddProfessionalForm 
                            addNewProfessional={addNewProfessional}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};