import React, { useState } from 'react'

import ProgressBar from './ProgressBar'

import '../styles/UploadForm.sass'

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
        <input className='inputfile' type='file' name='file' onChange={changeHandler} />
        <label htmlFor='file'>+</label>
        <div className='output'>
          {error && <span className='error'>{error}</span>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </React.Fragment>
  )
}

export default UploadForm
