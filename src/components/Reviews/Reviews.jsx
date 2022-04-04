import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useReviews } from '../../Hooks/useReviews.jsx';
import CustomerReview from '../CustomerReview/CustomerReview.jsx';

const Reviews = () => {
    const [reviews]= useReviews()
    return (
      <Container className="py-4">
        <Row xs={1} md={3} className="g-4 services-style">
          {reviews.map((review) => (
            <CustomerReview key={review.id} review={review}></CustomerReview>
          ))}
        </Row>
      </Container>
    );
};

export default Reviews;