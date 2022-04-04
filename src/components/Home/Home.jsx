import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import CustomerReview from '../CustomerReview/CustomerReview.jsx';
import { useReviews } from '../../Hooks/useReviews.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import SliceReviews from '../SliceReviews/SliceReviews.jsx';

const Home = () => {
    const {reviews}= useReviews()
    return (
      <Container>
        <div>
          <Row className="d-flex align-items-center my-5 ">
            <Col md={6} xs={12}>
              <h1 className="text-content">
                Buy Apple MacBook Pro and
                <span className="color-text"> MacBook Laptop</span>
              </h1>
              <p>
                When it comes to purchasing a new iPhone, there’s no better
                place to buy than Apple. For all your questions about carrier
                support, payment options, and getting your new iPhone set up, we
                have all the answers you need.
              </p>
              <button className="button-style">LIVE DEMO...</button>
            </Col>
            <Col md={6} xs={12}>
              <img
                className="img-fluid"
                src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <div>
          <h1>this is reviews</h1>
          {/* <Row xs={1} md={3} className="g-4 ">
            {reviews.slice(0, 4).map((review) => (
              <CustomerReview review={review}></CustomerReview>
            ))}
          </Row> */}
          <SliceReviews></SliceReviews>
        </div>
      </Container>
    );
};

export default Home;  