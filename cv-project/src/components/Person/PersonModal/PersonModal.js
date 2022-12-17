import React from "react";
import EditPersonForm from "../Forms/EditPersonForm";
import "./PersonModal.css";

export default function PersonModal(props) {
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <div className="modal-content__wrapper">
                    <h2 className="game-over_title">Person info</h2>
                    <EditPersonForm />
                </div>
            </div>
        </div> 
    );
};