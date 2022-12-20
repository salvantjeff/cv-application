import React from "react";
import EditContactForm from "../Forms/EditContactForm";

export default function ContactModal({ 
    modal,
    toggleModal,
    contacts,
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
                            <h2 className="game-over_title prof">Leadership Exp info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                >X</button>
                            </div>
                        </div>
                        <EditContactForm 
                            contacts={contacts}
                            onChange={onChange}
                            // onSubmit={onSubmit}
                        />
                    </div>
                </div>
            </div> 
            )}
        </>
    );
};