import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Cart = ({ pd }) => {
  return (
    <Col md={3}>
      <Card className='mb-3'>
        <Card.Img variant='top' src={pd.mainImg} />
        <Card.Body>
          <Card.Title>{pd.productName}</Card.Title>
          <Card.Text>
            <h3>Price: ${pd.price}</h3>
          </Card.Text>
          <Link to={`/productDetails/${pd._id}`}>
            <Button variant='primary'>View Product</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Cart
