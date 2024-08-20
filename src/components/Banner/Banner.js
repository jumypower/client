import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fastly.picsum.photos/id/613/2000/600.jpg?hmac=uelihlfCw3Km4-6RBQZevGg89i39thQwEp1fzuRqqWc"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fastly.picsum.photos/id/388/2000/600.jpg?hmac=fHP7kVSUZaqdd9Ty7l4P2Om1ljUd9h5fCy3YCAyR9eM"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fastly.picsum.photos/id/675/2000/600.jpg?hmac=6kzo9ECIh_XeeAqd3253PPH_PW3YufLt-KSGxaXDvF8"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner