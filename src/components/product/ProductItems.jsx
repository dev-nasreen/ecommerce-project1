import { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Cart from './ProductCard'
const ProductItems = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:2000/getProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])
  console.log(products)
  return (
    <>
      <Container>
        <Row>
          {products.map(pd => (
            <Cart key={pd._id} pd={pd} />
          ))}
        </Row>
      </Container>
    </>
  )
}
export default ProductItems
