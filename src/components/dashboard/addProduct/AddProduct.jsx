import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
  const [mainImg, setMainImg] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
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
      mainImg: mainImg,
      img2: img2,
      img3: img3,
      img4: img4
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

  const handleImgUrl = (imgFile, setImg) => {
    const imgData = new FormData()
    imgData.set('key', 'f8abae8e21b7331f6bd788466b3eb5a1')
    imgData.append('image', imgFile[0])

    axios
      .post('https://api.imgbb.com/1/upload', imgData)
      .then(res => {
        if (res) {
          setImg(res.data.data.display_url)
        }

        console.log(res.data.data.display_url)
      })
      .catch(err => console.log(err))
  }

  const handleMainImg = file => {
    handleImgUrl(file, setMainImg)
  }
  const handleImg2 = file => {
    handleImgUrl(file, setImg2)
  }
  const handleImg3 = file => {
    handleImgUrl(file, setImg3)
  }
  const handleImg4 = file => {
    handleImgUrl(file, setImg4)
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
                  {...register('short_description')}
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
                <Form.Label>Product Main Image</Form.Label>
                <Form.Control
                  type='file'
                  onChange={e => handleMainImg(e.target.files)}
                />
              </Form.Group>
              <Form.Group controlId='formFileMultiple' className='mb-3'>
                <Form.Label> Image 2</Form.Label>
                <Form.Control
                  type='file'
                  onChange={e => handleImg2(e.target.files)}
                />
              </Form.Group>
              <Form.Group controlId='formFileMultiple' className='mb-3'>
                <Form.Label>Image 3</Form.Label>
                <Form.Control
                  type='file'
                  onChange={e => handleImg3(e.target.files)}
                />
              </Form.Group>
              <Form.Group controlId='formFileMultiple' className='mb-3'>
                <Form.Label>Image 3</Form.Label>
                <Form.Control
                  type='file'
                  onChange={e => handleImg4(e.target.files)}
                />
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
