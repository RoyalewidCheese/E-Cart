import React from 'react'
import Header from '../components/Header'
const View = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://png.pngtree.com/png-vector/20210124/ourmid/pngtree-3d-shopping-basket-and-trolley-paper-package-with-products-png-image_2796620.jpg" alt="Source Picture"></img>
          <div>
            <h3 className='font-bold'>PID : ID</h3>
            <h1 className='text-5xl font-bold'>Product Name</h1>
            <h4 className='font-bold text-red-600 text-2xl'>$250</h4>
            <h4>Brand: Brand</h4>
            <h4>Category : Category</h4>
            <p>
              <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repudiandae, possimus assumenda ipsa quidem autem nostrum deleniti ipsum adipisci quo iure nesciunt minima soluta repellendus. Officia similique delectus aperiam ullam.
              <div className='flex justify-between mt-5'>
                <button className="bg-blue-600 text-white p-2">Add to Wishlist</button>
                <button className="bg-green-600 text-white p-2">Add to Cart</button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View