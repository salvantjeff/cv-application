import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Leadership from '../Leadership/Leadership';
import Person from '../Person/Person';
import PersonModal from '../Person/PersonModal/PersonModal';
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
            <Footer />
            <PersonModal />
        </div>
    );
};

export default Page;