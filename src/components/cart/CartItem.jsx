import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRegTimesCircle } from 'react-icons/fa'
const CartItem = () => {
  return (
    <Container>
      <Row>
        <Col md={1}>
          <img
            className='img-fluid'
            src='https://res.cloudinary.com/shadincloudinarytraining/image/upload/do5xmieq75vwwq8g28zi'
            alt=''
          />
        </Col>
        <Col>
          <h5 className='mt-4'>
            Intel Desktop PC - 17” Monitor - 4th Gen Core i3 Processor - 4GB RAM
            - 120GB SSD
          </h5>
        </Col>
        <Col
          md={2}
          className='d-flex justify-content-between align-items-center'
        >
          <button className='btn'>
            <FaRegTimesCircle />
          </button>
          <h6 className='m-0'>tk 1222</h6>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className='border-top border-dark ms-auto'>
            <h3 className=''>Total: Tk 1222</h3>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CartItem
