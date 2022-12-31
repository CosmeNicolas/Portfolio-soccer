import React from "react";
import journey from './Journey-Dont Stop Believin (Official Audio).mp3'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import {AiOutlinePauseCircle} from 'react-icons/ai'
import  './StyleAudio.css';

const Music = () => {
  const audio = new Audio(journey);
  audio.loop = true

  return(
    <div className="conteiner-btn">
      <button className="btn-music-play" onClick={()=>{audio.loop = true
      audio.play()}}> <AiOutlinePlayCircle className="icon-music"/>
      </button>
      <button className="btn-music-play" onClick={()=>{audio.loop = false;
      audio.pause()}}>
          <AiOutlinePauseCircle className="icon-music"/>
      </button>
      </div>
   
  ) 
}


export default Music;