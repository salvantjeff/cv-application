import React from "react";
import './ProfessionalModal.css';
import AddProfessionalForm from "../Forms/AddProfessionalForm";
import { GrClose } from "react-icons/gr";

export default function AddProfessionalModal({ 
    toggleModal,
    addNewProfessional,
    onChange,
    onSubmit
}) {
    return (
        <div className="modal add-professional-section prof">
            <div className="overlay prof" onClick={toggleModal}></div>
            <div className="modal-content prof">
                <div className="modal-content__wrapper prof">
                    <div className="modal-form__header prof">
                        <h2 className="game-over_title prof">Add Professional Exp</h2>
                        <div>
                            <button 
                                className="close-modal__button" 
                                onClick={toggleModal}
                            ><GrClose size='1.25rem' /></button>
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
    );
};