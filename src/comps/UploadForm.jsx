import { useState } from 'react'
import { motion } from 'framer-motion'

import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/jpeg', 'image/png']

  const changeHandler = (e) => {
    let selected = e.target.files[0]

    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file. Only .png and .jpeg type are allowed.')
    }
  }

  return (
    <React.Fragment>
      <form>
        <motion.div whileTap={{ scale: 0.9 }}>
          <input type='file' name='file' id='file' onChange={changeHandler} />
          <label htmlFor='file'><i className='material-icons'>add_a_photo</i></label>
        </motion.div>
        <div className='output'>
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
          {error && <span className='error'>{error}</span>}
        </div>
      </form>
    </React.Fragment>
  )
}

export default UploadForm
