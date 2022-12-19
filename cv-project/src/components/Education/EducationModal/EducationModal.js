import React from "react";

export default function EducationModal({ 
    modal, 
}) {
    
    return (
        <>
            {modal && (
            <div className="modal">
                <div className="overlay" ></div>
                <div className="modal-content">
                    <div className="modal-content__wrapper">
                        <div className="modal-form__header">
                            <h2 className="game-over_title">Person info</h2>
                            <div>
                                <button 
                                    className="close-modal__button" 
                                   
                                >X</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
            )}
        </>
    );
};