import React from "react";
import EditRelevantForm from "../Forms/EditRelevantForm";

export default function RelevantModal({ 
    modal,
    toggleModal,
    professionals,
    onChange,
    index,
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
                            <h2 className="game-over_title prof">Relevant Exp info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        {/* <EditProfessionalForm 
                            professionals={professionals}
                            index={index}
                            onChange={onChange}
                            onSubmit={onSubmit}
                        /> */}
                        <EditRelevantForm 
                        
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};