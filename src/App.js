import { ThemeProvider } from "./Context/ThemeContext";
import { LanguageProvider } from "./Context/LanguajeContext";
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import About from './About/about';
import Portfolio from './Portfolio/Portfolio';
import Contacto from './Contacto/Contacto';
import Footer from './Footer/footer'


function App() {
  return (
    <>
    <ThemeProvider>
    <LanguageProvider>
      <NavBar/>
      <Main />
      <About />
      <Portfolio />
      <Contacto />
      <Footer/>
    </LanguageProvider>
    </ThemeProvider>
    </>
  );
};

export default App;
