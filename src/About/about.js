
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguageContex from '../Context/LanguajeContext';
import './about.css'
import './Modal.css'
import Nicodev from './portfolio-removebg-preview.png'
import SkillBar from './Skills'
import { useModal } from './UseModal';
import Modal from './Modal'




function About(){
  
  const {theme} = useContext(ThemeContext)
  const {texts} = useContext(LanguageContex)
  const [isOpenModal, OpenModal, closeModal] = useModal(false)

    return(
        <section id='player' className={theme}>
          <div className='Conteiner'>
            <div className='conteiner-foto'>
             <img  className='foto1' src={Nicodev} alt='Nico3'/>
                <button className='btn-info' onClick={OpenModal}>+Info</button>
              <Modal  isOpen={isOpenModal} closeModal={closeModal}/>
              
            </div>  
            {/* END MODAL */}
            <div className='conteiner-descripcion'>
              <h1 className='title-player'>👨🏽‍💻{texts.titlePlayer}👀</h1>
                <SkillBar />
            </div>
             </div>
             {/* barra de progreso */}
        </section>
    );
  };

  export  default About;



