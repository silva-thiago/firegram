import React from 'react'

const Index = () => {
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
          <h1>Photographies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores architecto culpa.
          </p>
        </div>
      </main>
      <footer className='footer'>
        <div className='container'>
          <span className='text-muted'>© 2020 Thiago Silva</span>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Index