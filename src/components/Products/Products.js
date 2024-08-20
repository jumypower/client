import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useNavigate, redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const navigate = useNavigate();
  const { data, buyProducts } = useContext(DataContext);

  const [prefenceId, setPreferenceId] = useState(null)
  const [initPoint, setInitPoint] = useState(null)
  initMercadoPago('APP_USR-510cf5bc-4959-40b7-ae96-fc32af78e630');

  const createPreference = async (product) => {
    try {
      const response = await axios.post('https://ticketsserver.onrender.com/create_preference', {
        title: product.name,
        unit_price: product.price,
        quantity: 1,
      })

      //const { datos } = response.data
      return response.data;

    } catch (error) {
      console.log(error)
    }
  }

  const handleBuy = async (product) => {

    const data = await createPreference(product)

    if (data) {
      setPreferenceId(data.id)
      setInitPoint(data.init_point)
      window.location.href = data.init_point;
    }

    

  }

  // useEffect (() => {
  //   console.log('Effect')
  // },[data])

  return data.map((product) => {
    return (
      <>
        <Col>
          <Card>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title key={product.id}>{product.name}</Card.Title>
              <Card.Text>{product.author}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="primary" onClick={() => buyProducts(product)}>Agregar al carrito</Button>
              <Button variant="primary" onClick={() =>handleBuy(product)}>Comprar</Button>
              {/* {prefenceId && <Wallet initialization={{ prefenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />} */}
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  })
}

export default Products