import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useReviews } from '../../Hooks/useReviews.jsx';
import SliceReviewDisplay from '../SliceReviewDisplay/SliceReviewDisplay.jsx';
import './SliceReviews.css';

const SliceReviews = () => {
    const [reviews, ] = useReviews()
    return (
      <div className='my-5'>
        <Row xs={1} md={3} className="g-4 ">
          {reviews.slice(0, 3).map((review) => (
            <SliceReviewDisplay review={review}></SliceReviewDisplay>
          ))}
        </Row>
        <div className='mt-3'>
          <Link className='see-btn' to="/reviews">See all</Link>
        </div>
      </div>
    );
};

export default SliceReviews;