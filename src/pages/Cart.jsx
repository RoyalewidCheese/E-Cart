import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
      <>
        <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
        <div className='grid grid-cols-3 gap-4 mt-5'>
  <div className='col-span-2 border rounded p-5 shadow'>
    <table className='table-auto w-full text-left'>
      <thead>
        <tr>
          <th className='font-semibold'>#</th>
          <th className='font-semibold'>Name</th>
          <th className='font-semibold'>Image</th>
          <th className='font-semibold'>Quantity</th>
          <th className='font-semibold'>Price</th>
          <th className='font-semibold'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Product Name</td>
          <td>
            <img 
              src="https://png.pngtree.com/png-vector/20210124/ourmid/pngtree-3d-shopping-basket-and-trolley-paper-package-with-products-png-image_2796620.jpg" 
              alt="Source" 
              className='w-16 h-16 object-cover'
            />
          </td>
          <td>
            <div className='flex items-center'>
              <button className='font-bold bg-gray-200 px-2 rounded'>-</button>
              <input 
                type="text" 
                value={2} 
                readOnly 
                className='border p-1 rounded mx-2 text-center w-12'
              />
              <button className='font-bold bg-gray-200 px-2 rounded'>+</button>
            </div>
          </td>
          <td>$100</td>
          <td>
            <button className='text-red-600'>
              <i className='fa-solid fa-trash'></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className='mt-4 flex justify-center space-x-2'>
      <button className='bg-red-600 rounded p-2 text-white'>Empty Cart</button>
      <Link to={"/"} className='bg-blue-600 rounded p-2 text-white'>Return Shopping</Link>
    </div>
  </div>

  <div className='col-span-1 border rounded p-5 shadow'>
    <h2 className='text-2xl font-bold mb-4'>
      Total Amount: <span className='text-red-600'>$9.99</span>
    </h2>
    <hr />
    <button className='bg-green-600 rounded p-2 text-white w-full mt-4'>Check Out</button>
  </div>
</div>
        
      </>
    </div>
    </>
  )
}

export default Cart