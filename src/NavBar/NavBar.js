import { useContext } from 'react';
import {TbSoccerField} from 'react-icons/tb'
import {MdOutlinePersonPin} from 'react-icons/md'
import {MdOutlineBusinessCenter} from 'react-icons/md'
import {HiOutlinePhone} from 'react-icons/hi'
import {GiSoccerBall} from 'react-icons/gi'
import {FaSun} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md'
import {MdLabelImportantOutline} from 'react-icons/md'
import LanguageContex from '../Context/LanguajeContext';
import ThemeContext from '../Context/ThemeContext'
import Pelotamenu from './img/Cosme_Nicolas-removebg-preview (2).png'
import Music from '../Music/AudioPlayer'
import './NavBar.css';




const NavBar = () =>{
  const {theme, handleTheme} = useContext(ThemeContext)
  const {texts, handleLanguage} = useContext(LanguageContex)
  //boton desplegable
  
  const Menu = (e) => {
   
    const barMenu = document.querySelector('.nav-bar');
    barMenu.classList.toggle("active")
    
    //  alert("me ha pulsado")
  }
  return (
    <body className={theme}>
<div className='options'>
    <div  className="temas" >
    <input type="radio" name='theme' id='light-context' onClick={handleTheme} value='light'/>  <FaSun /> <label htmlFor="ligth"></label>        
    <input   type="radio" name='theme'  id='dark-context' onClick={handleTheme}  value='dark' /><MdDarkMode  /><label htmlFor="Dark" ></label>
          </div> 
          {/* end theme */}
         {/* Lenguaje */}
    <select name="language" onChange={handleLanguage}>
      <option value="en" className='idioma'>EN</option>
       <option value="es"  className='idioma'>ES</option>
     </select>  
          {/* Lenguaje */}

</div>
          <header id="inicio" >
        {/* themas */}
        

{/*              Menu                         */}

  <div className='conteiner-label' >
         <div className="logo">NIC<i><GiSoccerBall  className="logo-label" /></i>
     <MdLabelImportantOutline className='flecha' /> <Music />
  </div>
         
</div>
         <div className="hamburger" role="button" onClick={Menu}>
           <img src={Pelotamenu} alt="pelota" role="button" className="pelota-menu" />
         </div>
         <nav className="nav-bar">
          <ul>
            <li><a href="#home" className='active'><TbSoccerField className='icon-nav' /></a>
           {texts.iconCancha}</li>
            <li><a href="#player"><MdOutlinePersonPin className='icon-nav'/></a>{texts.iconPerson}</li>
            <li><a href="#project"><MdOutlineBusinessCenter className='icon-nav'/></a>{texts.iconProjects}</li>
            <li><a href="#contact"><HiOutlinePhone className='icon-nav'/></a>{texts.iconContact}</li>
          </ul>
         </nav>
          </header>
      </body>
      
    );
    
  };
  
  export default NavBar;
  

   