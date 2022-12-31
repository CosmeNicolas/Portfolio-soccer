import './Contacto.css';
import {MdSportsSoccer} from 'react-icons/md'
import { useContext } from 'react';
import LanguageContex from '../Context/LanguajeContext';
import ThemeContext from '../Context/ThemeContext';

function Contacto (){
  const {theme} = useContext(ThemeContext)
  const {texts} = useContext(LanguageContex)
    return(
        <>
        <div className={theme} id="contact">
        <section id='contact' className='contact'>
          <div className='container-form'>
            <form className='formulario'>
                <h1 className="title-contact"> <MdSportsSoccer /> {texts.titleContact}</h1>
              <div className='contenido-form'>
              <input className='name' type='text' placeholder='Name' size="50" required></input>
            <input type="email" name="myInput" placeholder="your@email.com" size="" required></input>
              <textarea className="text-tarea" name="myTextarea" placeholder="Your message here" cols="20" rows="5" minlength="5" maxlength="500" required></textarea>
                <button type='submit' className='btn-submit'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {texts.titleContact}!
                </button>
              </div>
            </form>
          </div>
        </section>
        </div>
        </>
    )
};


export default Contacto;