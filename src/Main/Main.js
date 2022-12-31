import React from 'react';
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import LanguageContex from '../Context/LanguajeContext'
import './main.css';
import pelota from './img/pelotasinfondo.png'
import cancha from "./img/cancha-portada-horizontal.jpg"


function Main(){
  const {theme} = useContext(ThemeContext)
  const {texts} = useContext(LanguageContex)
  return(
           <>
        <main className='main'>
          <div className={theme}>
          <img  className='cancha-fondo' src={cancha} alt="" />
          </div>
          <div className='contenedor-principal'>
            <div className='contenedor-secundario'>
           <h1 className='title'>Cosme Nicolas Mas 💻</h1>
           <span className="span">
           <h2 className='span-dev'>{texts.spanDev}...</h2>
           <div className='div-pelota'>
            <img className='pelota' src={pelota} alt="pelota" />
           </div>
           </span>
          </div>
          </div>
        </main>
        </> 
  )
}

export default Main