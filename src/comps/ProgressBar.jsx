import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

import '../styles/ProgressBar.sass'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url, setFile])

  return (
    <React.Fragment>
      <motion.div className='progress-bar' style={{ width: progress + '%' }} initial={{ width: 0 }} animate={{ width: progress + '%' }}></motion.div>
    </React.Fragment>
  )
}

export default ProgressBar
