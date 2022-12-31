import React from 'react'
import'./Skill.css'
import { useContext } from 'react'
import LanguageContex from '../Context/LanguajeContext';


function SkillBar() {
  const {texts} = useContext(LanguageContex)
  return(
    <>
    <div className="container-skill">
      <h1 className="title-text">Cosme Nicolas</h1>
      <div className="skill-box">
        <span className="title-">{texts.spanTitle}</span>
        <div className="skill-bar">
          <span className="skill-per human">
            <span className='tooltip'>100%</span>
          </span>
      </div>
    </div>
      <div className="skill-box">
        <span className="title-">Html</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className='tooltip'>95%</span>
          </span>
      </div>
    </div>
    <div className="skill-box">
        <span className="title-">Css</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className='tooltip'>85%</span>
          </span>
        </div>
      </div>
       <div className="skill-box">
        <span className="title-">js</span>
        <div className="skill-bar">
          <span className="skill-per js">
            <span className='tooltip'>70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title-">Node.js</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className='tooltip'>75%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title-">React.js</span>
        <div className="skill-bar">
          <span className="skill-per reacjs" id="project">
            <span className='tooltip'>75%</span>
          </span>
        </div>
      </div>
         </div>
    </>
  )
}

export default SkillBar