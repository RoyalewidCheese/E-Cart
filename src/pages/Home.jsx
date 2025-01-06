import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'

const Home = () => {
  const useDispatch = useDispatch()

  useEffect(() => {
    dispatch,(fetchProducts())
  },[])
  
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
      <div className='grid grid-cols-4'>
        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src="https://png.pngtree.com/png-vector/20210124/ourmid/pngtree-3d-shopping-basket-and-trolley-paper-package-with-products-png-image_2796620.jpg" alt="Source Picture"></img>
        
          <div className='text-center'>
            <h3 className='text-xl font -bold'>Product Name</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home