import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="Container">
    <Container>
      {/* Header */}
      <Row className="header py-3">
        <Col md={3}>
          {/* Company logo */}
          <img src="logo.png" alt="Company Logo" />
        </Col>
        <Col md={9}>
          {/* Navigation menu */}
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
          {/* Call-to-Action button */}
          <Button variant="primary">Get a Quote</Button>
        </Col>
      </Row>

      {/* Hero Section */}
      <Row className="hero py-5 text-center">
        <Col>
          <h1>Transport Services for Your Business</h1>
          <p>We provide state-to-state and interstate transport services for businesses of all sizes.</p>
        </Col>
      </Row>

      {/* Services Section */}
      <Row className="services py-5">
        <Col md={4}>
          <h3>State-to-State Transport</h3>
          <p>We provide reliable and efficient transport services between states, ensuring that your goods arrive on time and in good condition.</p>
        </Col>
        <Col md={4}>
          <h3>Interstate Transport</h3>
          <p>We have a team of experienced drivers who can transport your goods safely and efficiently between states, no matter the distance.</p>
        </Col>
      </Row>

      {/* About Us Section */}
      <Row className="about-us py-5">
        <Col>
          <h2>About Us</h2>
          <p>We are a transport company that has been in business for over 10 years. We are committed to providing reliable and efficient transport services for businesses of all sizes. Our values include honesty, integrity, and a commitment to customer satisfaction.</p>
        </Col>
      </Row>

      {/* Testimonials Section */}
      <Row className="testimonials py-5">
        <Col>
          <h2>Testimonials</h2>
          <blockquote className="blockquote">
            <p className="mb-0">"We have been using this transport company for years and they have never let us down. The drivers are always on time and the service is excellent."</p>
            <footer className="blockquote-footer">John Doe, ABC Inc.</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">"I have been using their services for my small business and I am very happy with the results. The team is always friendly and the prices are very reasonable."</p>
            <footer className="blockquote-footer">Jane Doe, XYZ Enterprises</footer>
          </blockquote>
        </Col>
      </Row>  {/* Contact Us Section */}
  <Row className="contact-us py-5">
    <Col>
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <Button variant="primary" type="submit">Submit</Button>
      </form>
      <p>Phone: (555) 555-5555</p>
      <p>Email: info@transportcompany.com</p>
    </Col>
  </Row>

  {/* Footer */}
  <Row className="footer py-3">
    <Col>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="#">Privacy Policy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Terms of Service</a>
        </li>
      </ul>
    </Col>
  </Row>
</Container>
</div>
);
};

export default Home;