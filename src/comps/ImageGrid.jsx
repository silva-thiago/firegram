import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')

  return (
    <React.Fragment>
      <div className='img-grid'>
        {docs && docs.map(doc => (
          <motion.div className='img-wrap' key={doc.id} onClick={() => setSelectedImg(doc.url)} layout whileHover={{ opacity: .75, scale: 1.025, shadow: 1 }} whileTap={{ scale: 0.9, borderRadius: "25%" }}>
            <motion.img src={doc.url} alt='Uploaded file' initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", velocity: 2, stiffness: 260, damping: 20, delay: .5 }} />
          </motion.div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default ImageGrid
