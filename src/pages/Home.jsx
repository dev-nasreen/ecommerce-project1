import React from 'react'
//import Header from '../components/header/Header';
import ProductItems from '../components/product/ProductItems'

const Home = () => {
  return (
    <section className='home-container'>
      <div className='home-area'>
        {/* <Header /> */}
        <ProductItems />
      </div>
    </section>
  )
}

export default Home
