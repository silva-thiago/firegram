import React from 'react'

import '../styles/Modal.sass'

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <React.Fragment>
      <div className='backdrop' onClick={handleClick}>
        <img src={selectedImg} alt='Enlarged file' />
      </div>
    </React.Fragment>
  )
}

export default Modal
