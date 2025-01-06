import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({insideHome}) => {
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
      <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>E Cart</Link>
      <ul className='flex-1 text-right'>
      { insideHome &&
        <li className='list-none inline-block px-5>'><input style={{ width: '300px' }} className='rounded p-2' type='text' placeholder='Search Products Here...'></input></li>
      }
        <li className='List-none inline-block px-5 items-center space-x-2'><Link to={'/wishlist'}><i className='fa-solid fa-heart text-red-600'></i>
        <span>Wishlist</span>
        <span className='bg-black text-white rounded p-1'>0</span>
        </Link></li>

        <li className='list-none inline-block px-5 items-center space-x-2'><Link to={'/Cart'}>
          <i className='fa-solid fa-cart-plus text-green-600'></i>
          <span>Cart</span>
          <span className='bg-black text-white rounded p-1'>0</span>
          </Link></li>
      </ul>
    </nav>
  )
}

export default Header