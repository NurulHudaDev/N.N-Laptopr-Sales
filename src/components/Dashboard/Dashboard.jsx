import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AnalysisProgress from '../AnalysisProgress/AnalysisProgress.jsx';
import LaptopAnalysis from '../LaptopAnalysis/LaptopAnalysis.jsx';


const Dashboard = () => {
    return (
      <Container>
            <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            <AnalysisProgress/>
          </Col>
          <Col md={6} xs={12}>
            <LaptopAnalysis/>
          </Col>
        </Row>
      </Container>
    );
};

export default Dashboard;<h1>this is Dashboard container</h1>