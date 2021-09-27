import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useParams } from 'react-router'

const ProductDetails = () => {
  const { id } = useParams()
  const [singlePd, setSinglePd] = useState({})
  const url = singlePd.mainImg
  useEffect(() => {
    fetch(`http://localhost:2000/productDetails/${id}`)
      .then(res => res.json())
      .then(data => setSinglePd(data[0]))
  }, [])

  const [selected, setSelected] = useState(singlePd.mainImg)
  const [imgUrl, setImgUrl] = useState(singlePd.mainImg)

  const imgData = [
    {
      id: 1,
      url: singlePd.mainImg
    },
    {
      id: 2,
      url: singlePd.img2
    },
    {
      id: 3,
      url: singlePd.img3
    },
    {
      id: 4,
      url: singlePd.img4
    }
  ]
  useEffect(() => {
    switch (selected) {
      case singlePd.mainImg:
        setImgUrl(singlePd.mainImg)
        break
      case singlePd.img2:
        setImgUrl(singlePd.img2)
        break
      case singlePd.img3:
        setImgUrl(singlePd.img3)
        break
      case singlePd.img4:
        setImgUrl(singlePd.img4)
        break
      default:
        setImgUrl(singlePd.mainImg)
    }
  }, [selected])
  return (
    <div className='product_details my-5'>
      <Row>
        <Col md={6} className=''>
          <div className='big_img_container'>
            <div className=''>
              {!selected ? (
                <img src={singlePd.mainImg} alt='product img' className=' ' />
              ) : (
                <img src={selected} alt='product img' className=' ' />
              )}
            </div>
          </div>
          <div className='img_container'>
            <div className='slide-img d-flex justify-content-center'>
              {imgData.map(img => (
                <div className='img1' key={img.id}>
                  <img
                    src={img.url}
                    alt='product img'
                    onClick={() => setSelected(img.url)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={6} className=' '>
          <div>
            <h3>{singlePd.productName}</h3>
            <p>{singlePd.description}</p>
            <h2>Price: ${singlePd.price}</h2>
            <button className='btn btn-success mt-2'>
              <AiOutlineShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails
