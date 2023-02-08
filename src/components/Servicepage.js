import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Services = () => {
  return (
    <Container fluid>
      {/* Header */}
      <Row className="header py-3">
        <Col>
          <img src="logo.png" alt="Transport Company Logo" />
        </Col>
        <Col>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <Button variant="primary">Get a Quote</Button>
            </li>
          </ul>
        </Col>
      </Row>

      {/* Services Section */}
      <Row className="services py-5">
        <Col>
          <h2>Our Services</h2>
          <p>We offer a wide range of transportation services to meet all your needs. Whether you need to transport your goods across the state or across the country, we have got you covered.</p>

          <h3>State-to-State Transport</h3>
          <p>Our state-to-state transport services are designed to make your life easier. We provide fast and reliable transportation of your goods from one state to another. Our team of experts will work closely with you to ensure that your goods are transported safely and efficiently.</p>

          <h3>Interstate Transport</h3>
          <p>Our interstate transport services are the best in the business. We provide fast and reliable transportation of your goods from one state to another. Our team of experts will work closely with you to ensure that your goods are transported safely and efficiently.</p>
        </Col>
      </Row>

      {/* Pricing Section */}
      <Row className="pricing py-5">
        <Col>
          <h2>Pricing</h2>
          <p>We offer competitive pricing for all our services. Contact us for a quote and see how we can help you save money on your transportation needs.</p>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="faq py-5">
        <Col>
          <h2>FAQ</h2>
          <h3>How do I place an order?</h3>
          <p>You can place an order by calling us at (555) 555-5555 or by filling out our contact form. One of our representatives will get back to you as soon as possible to assist with your order.</p>

          <h3>What are your hours of operation?</h3>
          <p>Our hours of operation are Monday to Friday, from 9 AM to 5 PM. If you need assistance outside of these hours, please contact us and we will do our best to accommodate your needs.</p>
        </Col>
      </Row>

      {/* Contact Us Section */}
      <Row className="
contact py-5">
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
</Col>
<Col>
<h3>Contact Information</h3>
<p>Phone: (555) 555-5555</p>
<p>Email: info@transportcompany.com</p>
</Col>
</Row>  {/* Footer */}
  <Row className="footer py-3">
    <Col>
      <ul className="nav">
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
);
};

export default Services;