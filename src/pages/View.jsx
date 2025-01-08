import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'

const View = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)
  const { id } = useParams()
  const { allProducts } = useSelector(state => state.productReducer)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    let foundProduct;
    if (sessionStorage.getItem("allproducts")) {
      const storedProducts = JSON.parse(sessionStorage.getItem("allproducts"))
      foundProduct = storedProducts.find(item => item.id == id)
    } else {
      foundProduct = allProducts.find(item => item.id == id)
    }
    setProduct(foundProduct)
    console.log(foundProduct) // Log the product data
  }, [allProducts, id])

  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item => item?.id == id)
    if(existingProduct){
      alert('Product already added to wishlist')
    }else{
      dispatch(addToWishlist(product))
    }
  }

  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        {product ? (
          <div className='grid grid-cols-2 items-center h-screen'>
            <div className="flex flex-col items-center">
              <img
                width={'450px'}
                height={'200px'}
                src={product.thumbnail}
                alt={product.title}
                className="mb-4"
              />
              <div className="flex flex-col justify-between space-y-2">
                <button onClick={handleWishlist} className="bg-blue-600 text-white p-2">Add to Wishlist</button>
                <button className="bg-green-600 text-white p-2">Add to Cart</button>
              </div>
            </div>
            <div>
              <h3 className='font-bold'>PID : {product.id}</h3>
              <h1 className='text-5xl font-bold'>{product.title}</h1>
              <h4 className='font-bold text-red-600 text-2xl'>${product.price}</h4>
              <br/>
              <span className='font-bold'>Brand :</span> {product.brand}
              <br/>
              <span className='font-bold'>Category :</span> {product.category}
              <p>
                <span className='font-bold'>Description</span>: {product.description}
              </p>
              <br/>
                            <h3 className='font-bold'>Client Reviews</h3>
              {
                product?.reviews?.length > 0 ?
                  product?.reviews?.map(item => (
                    <div key={item?.date} className='shadow-border p-2 mb-2'>
                      <h5>
                        <span className='font-bold'>{item?.reviewerName}</span> : <span>{item?.comment}</span>
                      </h5>
                      <p>
                        Rating:
                        {Array.from({ length: item?.rating || 0 }, (_, index) => ( 
                          <i key={index} className="fa-solid fa-star text-yellow-400"></i>
                        ))}
                      </p>

                    </div>
                  ))
                  :
                  <div> No reviews yet</div>
              }
            </div>
          </div>
        ) : (
          <div className='text-center'>Product not found</div>
        )}
      </div>
    </>
  )
}

export default View