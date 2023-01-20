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
            <div className="modal prof">
                <div className="overlay prof" onClick={toggleModal}></div>
                <div className="modal-content prof">
                    <div className="modal-content__wrapper prof">
                        <div className="modal-form__header prof">
                            <h2 className="game-over_title prof">Add Leadership Exp</h2>
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