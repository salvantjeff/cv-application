import React from "react";
import EditLeadershipForm from "../Forms/EditLeadershipForm";
import { GrClose } from "react-icons/gr";

export default function LeadershipModal({ 
    modal,
    toggleModal,
    leaderships,
    onChange,
    index,
    onSubmit,
    onClick
}) {
    
    return (
        <>
            {modal && (
            <div className="modal">
                <div className="overlay leadership-section" onClick={toggleModal}></div>
                <div className="modal-content leadership-section">
                    <div className="modal-content__wrapper leadership-section">
                        <div className="modal-form__header">
                            <h2 className="game-over_title">Leadership Exp info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                    onClick={toggleModal}
                                ><GrClose size='1.25rem' /></button>
                            </div>
                        </div>
                        <EditLeadershipForm 
                            leaderships={leaderships}
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