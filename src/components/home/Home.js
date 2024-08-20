import Navigation from "../navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

const Home = () => {

  return (
    <>
      <Navigation />
      <Banner />
      <Container className="my-5">
        <Row xs={1} md={4} className="g-4">
          <Products />
        </Row>
      </Container>
    </>
  )


}
export default Home;