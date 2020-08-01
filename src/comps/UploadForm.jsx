import React, { useState} from 'react'

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
      <input type='file' onChange={changeHandler} />
      <div className='output'>
        { error && <span className='error'>{ error }</span> }
        { file && <div>{ file.name }</div> }
      </div>
    </React.Fragment>
  )
}

export default UploadForm
