import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
  const [imgUrl, setImgUrl] = useState('')
  // const [img2, setImg2] = useState('');
  // const [img3, setImg3] = useState('');
  // const [img4, setImg4] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    const productData = {
      productName: data.pname,
      price: data.price,
      description: data.description,
      imageUrl: imgUrl
    }

    fetch('http://localhost:2000/addProduct', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(productData)
    })
      .then(res => res.json())
      .then(data => data && alert('product added successfully.'))
      .catch(err => console.log(err))
  }

  const handleImgUrl = event => {
    const imgData = new FormData()
    imgData.set('key', 'f8abae8e21b7331f6bd788466b3eb5a1')
    imgData.append('image', event.target.files[0])

    axios
      .post('https://api.imgbb.com/1/upload', imgData)
      .then(res => {
        if (res) {
          setImgUrl(res.data.data.display_url)
        }

        console.log(res.data.data.display_url)
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Row>
        <div
          className='product_form w-50 my-5 mx-auto p-3 rounded'
          style={{ backgroundColor: '#34495e', color: '#fff' }}
        >
          <Col xs lg='12' md='8'>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Product Name'
                  {...register('pname')}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Price'
                  {...register('price')}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Product description</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  {...register('description')}
                />
              </Form.Group>
              <Form.Group controlId='formFileMultiple' className='mb-3'>
                <Form.Label>Product Images</Form.Label>
                <Form.Control type='file' multiple onChange={handleImgUrl} />
              </Form.Group>
              <Button
                style={{
                  backgroundColor: '#d35400',
                  color: '#fff',
                  border: 'none'
                }}
                type='submit'
              >
                Submit
              </Button>
            </Form>
          </Col>
        </div>
      </Row>
    </Container>
  )
}

export default AddProduct
