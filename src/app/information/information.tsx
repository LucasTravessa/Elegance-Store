import Map from './map'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './information.module.css'


export default function Info() {
  return (
    <Container className= "mw-100 bgPrimary p-3">
      <Row className="justify-content-md-center">
        <Col lg="7">
            <Map/>
        </Col>
      </Row>
    </Container>
  );
}

