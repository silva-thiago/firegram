import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

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
      <div className='progress-bar' style={{ width: progress + '%' }}></div>
    </React.Fragment>
  )
}

export default ProgressBar
