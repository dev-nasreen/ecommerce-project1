import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Slider from 'react-slick'

const ProductDetails = () => {
  const url = 'https://i.ibb.co/0Kn9Pvb/img1.jpg'
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(url)
  const [slider2, setSlider2] = useState(null)

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  }

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    dots: false,
    swipeToSlide: false,
    focusOnSelect: true
  }

  return (
    <div className='product_details my-5'>
      <Row>
        <Col md={6} className='align-items-center'>
          <div className='big_img_container'>
            <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={slider => setSlider1(slider)}
            >
              <div className=''>
                <img
                  src={url}
                  alt='product img'
                  className='img-fluid slick-slide-image'
                />
              </div>
              <div className=''>
                <img
                  src='https://i.ibb.co/zxMHNvt/img2.jpg/>'
                  alt='product img'
                  className='img-fluid slick-slide-image'
                />
              </div>
              <div className=''>
                <img
                  src='https://i.ibb.co/6FWjD16/img3.jpg/>'
                  alt='product img'
                  className='img-fluid slick-slide-image'
                />
              </div>
              <div className=''>
                <img
                  src='https://i.ibb.co/2cQgwJC/img4.jpg/>'
                  alt='product img'
                  className='img-fluid slick-slide-image'
                />
              </div>
            </Slider>
          </div>
        </Col>
        <Col md={6} className=' '>
          <div>
            <h3>Product Title</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quod soluta nesciunt, eos iusto velit? Quae quo porro
              vitae voluptatem consectetur nemo fugit dicta beatae placeat modi,
              voluptatum sapiente facere.
            </p>
            <h2>Price: $350</h2>
            <button className='btn btn-success mt-2'>
              <AiOutlineShoppingCart />
              <span>Add to Cart</span>
            </button>
            <div className='img_container d-flex mt-3'>
              <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={slider => setSlider2(slider)}
              >
                <div className='img1'>
                  <img
                    src='https://i.ibb.co/0Kn9Pvb/img1.jpg/>'
                    alt='product img'
                    className='img-fluid slick-slide-image'
                  />
                </div>
                <div className='img1'>
                  <img
                    src='https://i.ibb.co/zxMHNvt/img2.jpg/>'
                    alt='product img'
                    className='img-fluid slick-slide-image'
                  />
                </div>
                <div className='img1'>
                  <img
                    src='https://i.ibb.co/6FWjD16/img3.jpg/>'
                    alt='product img'
                    className='img-fluid slick-slide-image'
                  />
                </div>
                <div className='img1'>
                  <img
                    src='https://i.ibb.co/2cQgwJC/img4.jpg/>'
                    alt='product img'
                    className='img-fluid slick-slide-image'
                  />
                </div>
              </Slider>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails
