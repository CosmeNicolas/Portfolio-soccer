import './Portfolio.css';
import clima from './Img/app-clima.png'
import calculadora from './Img/calculadora.png'
import stripe from './Img/ecommerce-helados.png'
import contador from './Img/ContadorClicks.png'
import mundial from './Img/Mascota-mundial.png'
import pokemon from './Img/PokeApi.png'
import reloj from './Img/Reloj-digital.png'
import supermercado from './Img/Super.png'
import tictactoe from './Img/Tik-tac-toe.png'
import nodejs from "./Img/imagenes-it/nodelogo.png";
import js from "./Img/imagenes-it/js-logo.png"
import css from "./Img/imagenes-it/csslogo.png"
import html from "./Img/imagenes-it/html5-removebg-preview.png"
import cypress from "./Img/imagenes-it/cypress-logo-removebg-preview.png"
import reactive from "./Img/imagenes-it/react-logo.png"
import jira from './Img//imagenes-it/jiralogo.jpg'
import postman from './Img/imagenes-it/postman.logo-removebg-preview.png'
import redux from './Img/imagenes-it/redux-logo-removebg-preview.png'
import sass from './Img/imagenes-it/sasslogo.png'
import gato from './Img/imagenes-it/github.png'
// import slider from './slider';




function Portfolio(){
  
  return(
    <>
       <section className="carrusel" >
        <div className="carrusel-items" id="contenedor-slider">
          <div className="carrusel-item">
    <img src={nodejs} alt="nodejs" className="img-1"/>
          </div>
          <div className="carrusel-item">
            <a className="img-1" href="https://wheater-smoky.vercel.app/">
            <img src={clima} alt="clima" className="img-1" /></a>
          </div>
          <div className="carrusel-item">
            <img src={css} alt="css" className="img-1"/>
          </div>
          <div className="carrusel-item">
            <a href="https://e-commerce-stripe-ten.vercel.app/">
            <img src={stripe} alt="stripe" className="img-1" />
            </a>
          </div>
          <div className="carrusel-item">
             <img src={html} alt="html" className="img-1"/>
          </div>
          <div className="carrusel-item">
            <a href="https://reloj-digital-silk.vercel.app/">
            <img src={reloj} alt="reloj" className="img-1" />
            </a>
          </div>
          <div className="carrusel-item">
            <img src={postman} alt="tictactoe" className="img-1"/>
          </div>
          <div className="carrusel-item">
            <a href="https://e-commerce-js-chi.vercel.app/">
            <img src={supermercado} alt="supermercado" className="img-1" />
            </a>
          </div>
          <div className="carrusel-item">
            <img src={reactive} alt="tictactoe" className="img-1"/>
          </div>
           <div className="carrusel-item">
            <a href="https://github.com/CosmeNicolas">
            <img src={gato} alt="tictactoe" className="img-1" />
            </a>
          </div>
        </div>
       </section>
       
       <section className="carrusel1" >
        <div className="carrusel-items1">
            <div className="carrusel-item1">
              <a href="https://pokemon-app-one-lime.vercel.app/">
            <img src={pokemon} alt="pokemon" className="img-carrusel-1" />
              </a>
          </div>
           <div className="carrusel-item1">
            <img src={js} alt="js" className="img-carrusel-1"/>
          </div>
          <div className="carrusel-item1">
            <a href="https://calculadora-react-lime.vercel.app/">
            <img src={calculadora} alt="calculadora" className="img-carrusel-1"/>
            </a>
          </div>
          <div className="carrusel-item1">
            <img src={cypress} alt="cypres-logo" className="img-carrusel-1"/>
          </div>
          <div className="carrusel-item1">
            <a href="https://contador-de-clics-cyan.vercel.app/">
            <img src={contador} alt="contador" className="img-carrusel-1" />
            </a>
          </div>
          <div className="carrusel-item1">
            <img src={jira} alt="jira-logo" className="img-carrusel-1"/>
          </div>
          <div className="carrusel-item1">
            <a href="https://equipo-mundial-ncxy.vercel.app/">
            <img src={mundial} alt="mundial" className="img-carrusel-1" />
            </a>
          </div>
          <div className="carrusel-item1">
            <img src={sass} alt="sass-logo" className="img-carrusel-1"/>
          </div>
          <div className="carrusel-item1">
            <a href="https://tik-tak-toe-eight.vercel.app/">
          <img src={tictactoe} alt="tictactoe" className="img-carrusel-1" />
          </a>
          </div>
          <div className="carrusel-item1">
            <img src={redux} alt="redux-logo" className="img-carrusel-1"/>
          </div>
          </div>
          <div></div>
          </section>
        </>
    
    )
  };
  


export default Portfolio;

// const d = document;
  // const carrusel = d.querySelector('.carrusel-items');
  
  // let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
  // let intervalo = null;
  
  // const start = () =>{
  //   intervalo = setInterval(function(){
  //     carrusel.scrollLeft = carrusel.scrollLeft + 10;
  //     if(carrusel.scrollLeft === maxScrollLeft) {
       
  //     }
  //   },10);
  // };
  
  // const stop = () =>{
  //   clearInterval(intervalo);
  // };
  
  // carrusel.addEventListener("mouseover", ()=>{
  //   stop();
  // })
  
  // carrusel.addEventListener("mouseout", ()=>{
  //   start();
  // })
  
  // start()
