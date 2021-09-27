import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsFillCircleFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
const Menu = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <Nav.Link href='/cart'>
              <div className='cart_icon'>
                <FaShoppingCart />
                <div className='cart_item'>
                  <BsFillCircleFill className='text-danger' />
                  <span>4</span>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
