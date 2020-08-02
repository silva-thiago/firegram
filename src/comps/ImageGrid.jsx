import React from 'react'
import useFirestore from '../hooks/useFirestore'

import '../styles/ImageGrid.sass'

const ImageGrid = () => {
  const { docs } = useFirestore('images')

  return (
    <React.Fragment>
      <div className='img-grid'>
        {docs && docs.map(doc => (
          <div className='img-wrap' key={doc.id}>
            <img src={doc.url} alt='Uploaded file' />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default ImageGrid
