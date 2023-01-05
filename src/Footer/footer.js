import React from 'react'
import { useContext } from 'react';
import LanguageContex from '../Context/LanguajeContext';
import { ImFacebook2, ImInstagram,ImLinkedin } from "react-icons/im";
import {GoMarkGithub} from 'react-icons/go'
import {GiSoccerKick} from 'react-icons/gi'
import {TbSoccerField} from 'react-icons/tb'
import './footer.css'
import ThemeContext from '../Context/ThemeContext';




export default function Footter(){
    const {theme} = useContext(ThemeContext)
  const {texts} = useContext(LanguageContex)
  return(
    <footer className='pie-pagina'>
      <div className={theme}>
      <div className='grupo1'>
        <div className='caja'>
          <figure>
            <GiSoccerKick className='kick'/>
          </figure>
        </div>
        <div className='caja'>
            <h2 className='info-redes'>{texts.infoRedes}</h2>
            <p className='parrafo-footer'>{texts.parrafoRedes}👋
            </p>
              <div id="home"  className='home-home' ><a href="#inicio" className='canchita'><TbSoccerField className='cancha-link' /></a>{texts.iconCancha}</div>
        </div>
        <div className='caja'>
          <h2 className='info-redes'>{texts.redes}</h2>
          <div className='redes'>
          <a href="https://www.facebook.com/"><ImFacebook2 className='redes-socialesf'/></a>
             <a href="https://www.instagram.com/"><ImInstagram className='redes-socialesi'/></a>
              <a href="https://www.linkedin.com/in/cosmenicolas/"><ImLinkedin className='redes-socialesl'/></a>
               <a href="https://github.com/"><GoMarkGithub className='redes-socialesg'/></a>
          </div>
        </div>
      </div>
    </div>
    <div className="grupo2">🫶{texts.footer}🤙</div>
    </footer>
  )
}

