import CartElements from "./CartElements"
import Navigation from "../navbar/Navbar"
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const CartContent = () => {

  const { cart } = useContext(DataContext);
  return cart.length > 0 ? (
    <>
      <Navigation />
      <Container>
        <Table striped unbordered hover size="sm">
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartElements />
          </tbody>
        </Table>
        <CartTotal />
      </Container>
    </>
  ) : (
    <>
      <Navigation />
      <Container>
        <h2>Carrito Vacio</h2>
      </Container >
    </>
  )
}

export default CartContent