import React from 'react';
import { Card, Col } from "react-bootstrap";
import Rating from 'react-rating';
import './CustomerReview.css'
const CustomerReview = (props) => {
    const { name, img, description, rating } = props.review;
    console.log(props);
    return (
      <Col>
        <Card className="h-100 bg-farhan">
          <Card.Img height="250" variant="top" src={img} className="p-y" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>{description}</p>

            <p className='text'>
              Rating :
              <Rating
                className="rating"
                placeholderRating={rating}
                emptySymbol={<i className="far fa-star" bg="warning"></i>}
                placeholderSymbol={<i className="fas fa-star" bg="warning"></i>}
                fullSymbol={<i className="fas fa-star" bg="warning"></i>}
              />
            </p>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CustomerReview;