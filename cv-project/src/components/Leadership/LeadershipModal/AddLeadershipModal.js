import React from "react";
import AddLeadershipForm from "../Forms/AddLeadershipForm";
import { GrClose } from "react-icons/gr";

export default function AddLeadershipModal({ 
    modal,
    toggleModal,
    addNewLeadership,
    onChange,
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
                            <h2 className="game-over_title">Add Leadership Exp</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                ><GrClose size='1.25rem' /></button>
                            </div>
                        </div>
                        <AddLeadershipForm 
                            addNewLeadership={addNewLeadership}
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