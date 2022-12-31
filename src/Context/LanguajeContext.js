import { createContext, useState } from "react";


const LanguageContex = createContext();

const initialLanguage = "en";
const translations = {
  en:{
    headerLight:"Light",
    headerDark:"Dark",
    iconCancha: "Home",
    iconPerson: "About Me",
    iconProjects: "Projects",
    iconContact:"Contact",
    spanDev: "Developer",
    titlePlayer: "Player",
    modalText: `Welcome to the space⚽, I hope you are enjoying the ride..🤙.

This time I will tell you a little without getting bored that I am a very curious person, who learns quickly and adapts to contexts. I consider myself a very lucky person to be able to work on the things that I like and to be able to learn more about this new technological world. I like teamwork and sports, but I am passionate about soccer, as well as technology.

At the moment I am working on an app, to facilitate the use of cell phones for older adults with respect to their information about their current financial status and days of collection, since in Argentina it is very difficult for them to be able to acquire information from the cell phones.

If you made it to the end, let me thank you for your time and interest in simply knowing a little about me.
PS: I have a very good sense of Humor and the song that is playing motivates me a lot, regards👋`,
    spanTitle:"Human",
    titleContact:"Contact",
    infoRedes: "This project",
    parrafoRedes:`This time I tried to combine my two great passions, as well as technology and sports, if you got here, I hope you liked it and you can also contact me through social networks.. 😀`,
    redes: "Follow Me",
    footer: "Made with Love"
  },
  es:{
    headerLight:"Claro",
    headerDark:"Oscuro",
    iconCancha: "Inicio",
    iconPerson: "Sobre mi",
    iconProjects: "Proyectos",
    iconContact:"Contacto",
    spanDev: "Programador",
    titlePlayer: "Jugador",
    modalText: `Bienvenid@ al espacio⚽, espero que estes disfrutando el paseo..🤙.

En esta oportunidad te contare un poco sin aburrirte que soy una persona muy curiosa, que aprende rapido y se adapta a los contextos. Me considero una persona muy afortunada al poder trabajar de las cosas que me gustan y poder aprender mas de este nuevo mundo tecnologico. Me gusta el trabajo en equipo y los deportes, pero me apasiona el futbol, asi como la tecnologia.

En estos momentos estoy trabajando en una app, para facilitar el uso de los celulares para adultos mayores con respecto a su informacion sobre su estado financiero actual y dias de cobro, ya que en Argentina se hace muy dificil para ellos el poder adquirir informacion desde los celulares.

Si llegaste hasta el final dejame agradecerte por tu tiempo y el interes de simplemente saber un poco de mi.
PD: Tengo un muy buen sentido del Humor! y la cancion que esta sonando me motiva a seguir, Saludos!💪`,
    spanTitle:"Humano",
    titleContact:"Fichar",
    infoRedes: "Sobre la Pagina",
    parrafoRedes:`En esta oportunidad traté de combinar mis dos grandes pasiones, asi como la tecnologia y el deporte, si llegaste hasta aca, espero que te haya gustado y podes contactarme tambien por redes sociales. 😀`,
    redes: "Sigueme",
    footer: "Hecho con Cariño"
  },
  
}


const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language])

  const handleLanguage = (e)=>{
    if(e.target.value === "en"){
      setLanguage('en');
    }else{
      setLanguage('es');
      setTexts(translations.es);
    }
  }


  const data={texts,handleLanguage}
  return (
    <LanguageContex.Provider value={data}>{children}</LanguageContex.Provider>
  )
}

export {LanguageProvider}
export default LanguageContex;