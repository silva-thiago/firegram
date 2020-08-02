import React from 'react'
import { motion } from 'framer-motion'

import '../styles/Modal.sass'

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <React.Fragment>
      <motion.div className='backdrop' onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.img src={selectedImg} alt='Enlarged file' initial={{ y: '-100vh' }} animate={{ y: 0 }} />
      </motion.div>
    </React.Fragment>
  )
}

export default Modal
