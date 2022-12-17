import './Leadership.css';
import nsbeLogo from '../../img/nsbe-logo.png';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';

function Leadership () {
    return (
        <div className="leadership">
            <div className="heading-block">
                <h4 className="leadership-title">Leadership/Organization Experience</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p className="add-new__button-text">Add new leadership</p>
                </div>
            </div>
            <div className="all-leaderships">
                <div className="leadership-card">
                    <div className='leadership-icon-box'>
                        <img className="leadership-icon" src={nsbeLogo} alt="leadership icon"/>
                    </div>
                    <div className="leadership-details">
                        <div className="section-card">
                            <p className="leadership-organization">National Society of Black Engineers</p>
                            <div className="edit-section-box">
                                <img className="edit-section" src={editPencil} alt="edit section"/>
                            </div>
                        </div>
                        <p className="leadership-position">Freshman Representative</p>
                        <p className="leadership-duration">September 2018 - May 2019</p>
                        <p className="leadership-summary">Presented, weekly upcoming events for NSBE</p>
                    </div>
                </div>
                <div className="leadership-card">
                    <div className='leadership-icon-box'>
                        <img className="leadership-icon" src={nsbeLogo} alt="leadership icon"/>
                    </div>
                    <div className="leadership-details">
                        <div className="section-card">
                            <p className="leadership-organization">National Society of Black Engineers</p>
                            <div className="edit-section-box">
                                <img className="edit-section" src={editPencil} alt="edit section"/>
                            </div>
                        </div>                        <p className="leadership-position">Freshman Representative</p>
                        <p className="leadership-duration">September 2018 - May 2019</p>
                        <p className="leadership-summary">
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                            Presented, weekly upcoming events for NSBE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;