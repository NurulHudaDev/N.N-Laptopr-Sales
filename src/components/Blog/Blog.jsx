import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
      <div>
        <Container>
          <Row className="d-flex align-items-center my-5 ">
            <Col md={6} xs={12}>
              <h4>1.What Is Context Api ?</h4>
              <p>
                <strong>Answer: </strong>
                Context provides a way to pass data through the component tree
                without having to pass props down manually at every level.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <h4>2.What is Semantic tag?</h4>
              <p>
                <strong>Answer: </strong>A semantic element clearly describes
                its meaning to both the browser and the developer. Examples of
                non-semantic elements: div and - span Tells nothing about its
                content. Examples of semantic elements: from , table ,article,
                and - Clearly defines its content.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Blog;  <h1>this is blog container</h1>