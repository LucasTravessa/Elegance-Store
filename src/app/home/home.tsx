import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <Container className="bgPrimary mw-100 p-5">
        <Container className="pt-5">
          <Row className="d-flex justify-content-center">
            {/* Left */}
            <Col className={`col-11 col-lg-5 ${styles.col}`}>
              <Card className={`${styles.card_left}`}>
                <Card.Img id={`${styles.elegance_store_photo}`} src="https://lh3.googleusercontent.com/p/AF1QipMer_iFVD4ya7zrSuXqtIn9Rshk-rTZCx0LKbR_=s680-w680-h510" />
              </Card>
            </Col>

            {/* Right */}
            <Col className={`col-11 mt-4 mt-lg-0 col-lg-5 ${styles.col}`}>
              <Card className={`${styles.card_right}`}>
                <Card.Body className={`${styles.card_body_text}`}>
                  <p>
                    Somos uma loja especializada em joias de prata e Rommanel,
                    oferecendo uma ampla variedade de produtos elegantes e sofisticados para quem busca qualidade e beleza em suas peças.<br/>
                    Com uma seleção cuidadosa de itens, nossos clientes podem encontrar desde colares e brincos até pulseiras e anéis,
                    sempre com um acabamento impecável e design exclusivo.<br/>
                    Além disso, nossa equipe está sempre pronta para oferecer um atendimento personalizado e ajudar a escolher a peça perfeita para cada ocasião.
                  </p>
                  <p>
                    Venha conhecer a Elegance e se encantar com nossas joias de alta qualidade e bom gosto.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </Container>
    </>
  );
}
