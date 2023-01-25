import React from 'react'
import Footer from './Footer'
import Header from './Header'

import ProductList from './ProductList'

const Home = () => {
  return (
    <div className='d-flex flex-column site-container'>
        <Header/>
        <p>Home Page</p>
        <ProductList/>
        <Footer/>
    </div>
  )
}

export default Home
