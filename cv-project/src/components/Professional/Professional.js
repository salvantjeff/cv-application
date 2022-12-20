import './Professional.css';
import ngLogo from '../../img/ng-logo.png';
import neofectLogo from '../../img/neofect-logo.jpeg';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import ProfessionalModal from './ProfessionalModal/ProfessionalModal';
import { v4 as uuidv4 } from 'uuid';

function Professional () {
    const initProfessionals = [
        {
            position: 'Structural Design Engineer Intern',
            company: 'Northrop Grumman',
            startDate: 'May 2021',
            endDate: 'Aug 2021',
            location: 'Palmdale, California',
            summary: `Contributed to the structural design team by reviewing and fixing drawing designs`,
            id: uuidv4(),
        },
        {
            position: 'Customer support Intern',
            company: 'Neofect',
            startDate: 'June 2019',
            endDate: 'Aug 2019',
            location: 'Richmond, Virginia',
            summary: `
                flsdkafjlasdkfjl;akfjldkfjaslkfjdl;kfjsdalkjflkasdjf
                lsdakfjlasd;kfjsdalfkjslakfjsdlkfjasdlkfjslakfjasdlkfjasdlkfjsdlkf
                jaslkfjl;sakfjsdal;fkj;sdlfkjdaslf;ksdjflkasjdflkdsjflasdkjflasd
                kfjlsdkfjlkfjal;kfjasdl;fkjsdlofksjflaskfjldkfjasdl;fkjdl;askjfas
                ifjffoijfkldsfjaklfjdklfjaldjflo;aifjdsl;ifjawofiejlofasdjnvlsdf
                jkgjoigjgpoiawgjaopigjerpgiorjgtoiaerghjoighjeoaighjaergtyiojrgkl
                sdfgjnlkfghjadefpioghjopigjdfigjskgjsgkljfkjfkfaklfjslakfjalkfks
                jflksajflksdfjokjlkjlfkjsldakfjlksdjfklsjfslakfjasl;dfjo2itjugo
                uhjoighjoighjeraoguihag
            `,
            id: uuidv4(),
        }
    ];
    const [index, setIndex] = useState(0);
    const [professionals, setProfessionals] = useState(initProfessionals);
    const [professionalsInfo, setProfessionalsInfo] = useState(initProfessionals);

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
        const newIndex = parseInt(e.target.dataset.index);
        console.log(newIndex);
        setIndex(newIndex);
        toggleModal();
    }
    
    console.log(professionalsInfo);
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
                {professionalsInfo.map((professional, index) => {
                    return (
                        <div key={professional.id} className='professional-exp'>
                            <div className='professional-icon-box'>
                                <img className="professional-icon" src={ngLogo} alt="professional icon"/>
                            </div>
                            <div className='professional-exp__details'>
                                <div className="section-card">
                                    <p className='position'>{professional.position}</p>
                                    <div className="edit-section-box">
                                        <img 
                                            className="edit-section" 
                                            src={editPencil} 
                                            alt="edit section"
                                            onClick={handleEditClicked}
                                            data-index={index}
                                        />
                                    </div>
                                </div>
                                <p className='company'>{professional.company}</p>
                                <p className='time-worked'>{professional.startDate} - {professional.endDate}</p>
                                <p className='work-location'>{professional.location}</p>
                                <p className='work-summary'>
                                    {professional.summary}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ProfessionalModal 
                toggleModal={toggleModal}
                modal={modal}
            />
        </div>
    );
};

export default Professional;