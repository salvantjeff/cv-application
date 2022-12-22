import React from "react";
import EditProfessionalForm from "../Forms/EditProfessionalForm";
import './ProfessionalModal.css';

export default function ProfessionalModal({ 
    modal,
    toggleModal,
    professionals,
    onChange,
    index,
    onSubmit,
    onClick
}) {
    
    return (
        <>
            {modal && (
            <div className="modal prof">
                <div className="overlay prof" onClick={toggleModal}></div>
                <div className="modal-content prof">
                    <div className="modal-content__wrapper prof">
                        <div className="modal-form__header prof">
                            <h2 className="game-over_title prof">Professional info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <EditProfessionalForm 
                            professionals={professionals}
                            index={index}
                            onChange={onChange}
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