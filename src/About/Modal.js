import './Modal.css'
import {AiFillCloseSquare} from 'react-icons/ai'
import { useContext } from 'react'
import LanguageContex from '../Context/LanguajeContext'

const Modal = ({children, isOpen, closeModal}) => {
  const {texts} = useContext(LanguageContex)
  const handleModal = (e) => e.stopPropagation()
  return(
    <article className={`modal ${isOpen &&"is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModal}>
                   <p className='parrafo'>{texts.modalText} 😀👀.</p>
        <button className='modal-close' >
            <AiFillCloseSquare className='btn-close' onClick={closeModal} />
        </button>
        { children }
      </div>
    </article>
  )
}

export default Modal