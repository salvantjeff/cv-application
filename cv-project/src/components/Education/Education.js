import './Education.css';
import vcuLogo from '../../img/vcu-logo.jpeg';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';

function Education () {
    return (
        <div className='education'>
            <div className="heading-block">
                <h4 className='education-title'>Education</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p className="add-new__button-text">Add new education</p>
                </div>
            </div>
            <div className='education-all-items'>
                <div className='education-item'>
                    <div className="education-icon-box">
                        <img className="education-icon" src={vcuLogo} alt="education icon"/>
                    </div>
                    <div className='education-details'>
                        <div className="section-card">
                            <p className='university'>Virginia Commonwealth University</p>
                            <div className="edit-section-box">
                                <img className="edit-section" src={editPencil} alt="edit section"/>
                            </div>
                        </div>
                        <p className='major'>Mechanical Engineering</p>
                        <p className='duration'>2018 - 2022</p>
                        <p className='gpa'>GPA: 3.5</p>
                    </div>
                </div>
                <div className='education-item'>
                    <div className="education-icon-box">
                        <img className="education-icon" src={vcuLogo} alt="education icon"/>
                    </div>
                    <div className='education-details'>
                        <div className="section-card">
                            <p className='university'>Virginia Commonwealth University</p>
                            <div className="edit-section-box">
                                <img className="edit-section" src={editPencil} alt="edit section"/>
                            </div>
                        </div>
                        <p className='major'>Mechanical Engineering</p>
                        <p className='duration'>2018 - 2022</p>
                        <p className='gpa'>GPA: 3.5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;