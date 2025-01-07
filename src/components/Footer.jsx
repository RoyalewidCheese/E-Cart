import React from 'react'

const Footer = () => {
  return (
    <div>
      <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4'>
  {/* Section 1: About */}
  <div style={{ width: '400px' }} className='intro'>
    <h5 className='text-xl font-bold'>
      <i className='fa-solid fa-truck-fast me-2'></i>E Cart
    </h5>
    <p>
      Designed and built with all the love in the world by the Luminar team
      with the help of our contributors.
    </p>
    <p>Code licensed Luminar, docs CC by 3.0</p>
    <p>Currently v5.3.2</p>
  </div>

  {/* Section 2: Quick Links */}
  <div style={{ width: '200px' }} className='links'>
    <h5 className='text-lg font-bold'>Links</h5>
    <ul>
      <li><a href='#'>Landing Page</a></li>
      <li><a href='#'>Home Page</a></li>
      <li><a href='#'>History Page</a></li>
    </ul>
  </div>

  {/* Section 3: Contact */}
  <div style={{ width: '200px' }} className='contact'>
    <h5 className='text-lg font-bold'>Guides</h5>
    <p>React Bootstrap</p>
    <p>React</p>
    <p>React Router DOM</p>
  </div>

  {/* Section 4: Follow Us */}
  <div style={{ width: '200px' }} className='social'>
  <h5 className='text-lg font-bold'>Follow Us</h5>
  <ul className='flex space-x-4 mb-4'>
    <li><a href='#'><i className='fa-brands fa-facebook'></i></a></li>
    <li><a href='#'><i className='fa-brands fa-twitter'></i></a></li>
    <li><a href='#'><i className='fa-brands fa-instagram'></i></a></li>
    <li><a href='#'><i className='fa-brands fa-linkedin'></i></a></li>
  </ul>
  <input 
      type='email' 
      placeholder='Enter your email' 
      className='flex-1 p-2 border rounded-l' 
      required 
    />
</div>
</div>

        </div>
      </div>
  )
}

export default Footer