import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

import '../styles/ImageGrid.sass'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')

  return (
    <React.Fragment>
      <div className='img-grid'>
        {docs && docs.map(doc => (
          <motion.div className='img-wrap' key={doc.id} onClick={() => setSelectedImg(doc.url)} layout whileHover={{ opacity: .75 }}>
            <motion.img src={doc.url} alt='Uploaded file' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
          </motion.div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default ImageGrid
