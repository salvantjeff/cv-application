import './Professional.css';
import ngLogo from '../../img/ng-logo.png';
import neofectLogo from '../../img/neofect-logo.jpeg';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import ProfessionalModal from './ProfessionalModal/ProfessionalModal';

function Professional () {
    const [modal, setModal] = useState(false);
    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [modal]);
    
    function toggleModal() {
        setModal(!modal);
    };

    function handleEditClicked(e) {
        // const newIndex = parseInt(e.target.dataset.index);
        // console.log(newIndex);
        // setIndex(newIndex);
        toggleModal();
    }
    return(
        <div className='professional'>
            <div className="heading-block">
                <h4 className='professional-title'>Professional Experience</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p className="add-new__button-text">Add new professional</p>
                </div>
            </div>
            <div className='all-professional-exp'>
                <div className='professional-exp'>
                    <div className='professional-icon-box'>
                        <img className="professional-icon" src={ngLogo} alt="professional icon"/>
                    </div>
                    <div className='professional-exp__details'>
                        <div className="section-card">
                            <p className='position'>Structural Design Engineer Intern</p>
                            <div className="edit-section-box">
                                <img 
                                className="edit-section" 
                                src={editPencil} 
                                alt="edit section"
                                onClick={handleEditClicked}
                                />
                            </div>
                        </div>
                        <p className='company'>Northrop Grumman</p>
                        <p className='time-worked'>May 2021 - Aug 2021</p>
                        <p className='work-location'>Palmdale, California</p>
                        <p className='work-summary'>
                            Contributed to the structural design team by 
                            reviewing and fixing drawing designs
                        </p>
                    </div>
                </div>

                <div className='professional-exp'>
                    <div className='professional-icon-box'>
                        <img className="professional-icon" src={neofectLogo} alt="professional icon"/>
                    </div>
                    <div className='professional-exp__details'>
                        <div className="section-card">
                            <p className='position'>Structural Design Engineer Intern</p>
                            <div className="edit-section-box">
                                <img className="edit-section" src={editPencil} alt="edit section"/>
                            </div>
                        </div>                        <p className='company'>Northrop Grumman</p>
                        <p className='time-worked'>May 2021 - Aug 2021</p>
                        <p className='work-location'>Palmdale, California</p>
                        <p className='work-summary'>
                            Contributed to the structural design team by reviewing and fixing 
                            drawing designs flsdkafjlasdkfjl;akfjldkfjaslkfjdl;kfjsdalkjflkasdjf
                            lsdakfjlasd;kfjsdalfkjslakfjsdlkfjasdlkfjslakfjasdlkfjasdlkfjsdlkf
                            jaslkfjl;sakfjsdal;fkj;sdlfkjdaslf;ksdjflkasjdflkdsjflasdkjflasd
                            kfjlsdkfjlkfjal;kfjasdl;fkjsdlofksjflaskfjldkfjasdl;fkjdl;askjfas
                            ifjffoijfkldsfjaklfjdklfjaldjflo;aifjdsl;ifjawofiejlofasdjnvlsdf
                            jkgjoigjgpoiawgjaopigjerpgiorjgtoiaerghjoighjeoaighjaergtyiojrgkl
                            sdfgjnlkfghjadefpioghjopigjdfigjskgjsgkljfkjfkfaklfjslakfjalkfks
                            jflksajflksdfjokjlkjlfkjsldakfjlksdjfklsjfslakfjasl;dfjo2itjugo
                            uhjoighjoighjeraoguihag
                        </p>
                    </div>
                </div>
            </div>
            <ProfessionalModal 
                toggleModal={toggleModal}
                modal={modal}
            />
        </div>
    );
};

export default Professional;