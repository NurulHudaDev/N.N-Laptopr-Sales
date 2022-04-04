import React from 'react';
import { Row } from 'react-bootstrap';
import { useReviews } from '../../Hooks/useReviews.jsx';
import SliceReviewDisplay from '../SliceReviewDisplay/SliceReviewDisplay.jsx';

const SliceReviews = () => {
    const [reviews, ] = useReviews()
    return (
      <div className='my-5'>
        <Row xs={1} md={3} className="g-4 ">
          {reviews.slice(0, 3).map((review) => (
            <SliceReviewDisplay review={review}></SliceReviewDisplay>
          ))}
        </Row>
      </div>
    );
};

export default SliceReviews;