import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Leadership from '../Leadership/Leadership';
import Person from '../Person/Person';
import Professional from '../Professional/Professional';
import Relevant from '../Relevant/Relevant';
import Skills from '../Skills/Skills';
import './Page.css';

function Page () {
    return (
        <div className='page-container'> 
            <Person />
            <Education />
            <Skills />
            <Professional />
            <Relevant />
            <Leadership />
            <Contact />
        </div>
    );
};

export default Page;