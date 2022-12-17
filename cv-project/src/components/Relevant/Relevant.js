import './Relevant.css';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';

function Relevant () {
    return (
        <div className="relevant">
            <div className="heading-block">
                <h4 className="relevant-title">Relevant Experience</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p className="add-new__button-text">Add new relevant</p>
                </div>
            </div>
            <div className="all-projects">
                <div className="project-card">
                    <div className="section-card">
                        <p className="project-name">Senior Design Capstone Project</p>
                        <div className="edit-section-box">
                            <img className="edit-section" src={editPencil} alt="edit section"/>
                        </div>
                    </div>                    
                    <p className="project-duration">August 2021 - May 2022</p>
                    <p className="project-summary">
                        Goal was to train a neural network with handwritten 
                        digits image from EMNIST database
                    </p>
                </div>
                <div className="project-card">
                    <div className="section-card">
                        <p className="project-name">Senior Design Capstone Project</p>
                        <div className="edit-section-box">
                            <img className="edit-section" src={editPencil} alt="edit section"/>
                        </div>
                    </div>
                    <p className="project-duration">August 2021 - May 2022</p>
                    <p className="project-summary">
                        Goal was to train a neural network with handwritten digits image from EMNIST database
                        Goal was to train a neural network with handwritten digits image from EMNIST database
                        Goal was to train a neural network with handwritten digits image from EMNIST database
                        Goal was to train a neural network with handwritten digits image from EMNIST database
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Relevant;