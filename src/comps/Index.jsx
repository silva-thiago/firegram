import React, { useState } from 'react'

import UploadForm from './UploadForm'
import ImageGrid from './ImageGrid'
import Modal from './Modal'

const Index = () => {
  const [selectedImg, setselectedImg] = useState(null)

  return (
    <React.Fragment>
      <header>
        <nav className='navbar'>
          <span className='navbar-brand'>
            <h3>Firegram</h3>
          </span>
        </nav>
      </header>
      <main role='main'>
        <div className='container'>
          <h1 className='text-center'>Photographies</h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores architecto culpa.
          </p>
          <UploadForm />
          <ImageGrid setSelectedImg={setselectedImg} />
          {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setselectedImg} />}
        </div>
      </main>
      <footer className='footer'>
        <div className='container'>
          <span className='text-muted'>© 2020 Thiago Silva</span>
          <span className='text-muted'>The Firegram was built with ReactJS + Firebase</span>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Index