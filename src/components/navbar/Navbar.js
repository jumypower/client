import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import TotalItems from '../CartContent/TotalItems';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ps-5 pe-5">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Navbar.Text>
            <Link to={'/'}>
              Inicio
            </Link>
          </Navbar.Text>
        </Nav>
        <Navbar.Text>
          <Link to={'/Cart'}>
            <FaShoppingCart style={{ fontSize: '30px' }} />
            <TotalItems />
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation