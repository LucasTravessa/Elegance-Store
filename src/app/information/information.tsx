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
      <Row className={"bgSecondary m-5 border border-dark"} id={styles.contato}>
        {/* <Row className='text-center'>
          <Col>
            <h1>Contato</h1>
          </Col>
        </Row> */}
        <Row className='text-center'>
          <Col>
            <h4>Elegance Rommanel</h4>
            <p>Rod. Amaral Peixoto, 5231</p>
            <p>Centro</p>
            <p>Rio das Ostras - RJ, 28890-000</p>
          </Col>
          <Col>
            <h4>Telefone:</h4>
            <p>(022)998313480</p>
            <h4>Instagram:</h4>
            <p>@elegance.rommanel</p>
          </Col>
          <Col>
            <h4>Funcionamento:</h4>
            <p>Segunda a sexta: 9:30 as 18:00</p>
            <p>Sábado: 9:30 as 16:00</p>
            <p>Domingo: Fechado</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

