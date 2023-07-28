import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from './home.module.css';

export default function Home() {
  return (
    <div className="bgPrimary">
      <Container className="my-5 py-5 px-md-2 px-lg-5">
        <Row>
          {/* Left */}
          <Col className={`col-12 col-md-6 ${styles.col}`}>
            <Card className={`${styles.card_left}`}>
              <Card.Img id={`${styles.elegance_store_photo}`} src="https://lh3.googleusercontent.com/p/AF1QipMer_iFVD4ya7zrSuXqtIn9Rshk-rTZCx0LKbR_=s680-w680-h510" />
            </Card>
          </Col>

          {/* Right */}
          <Col className={`col-12 mt-3 mt-md-0 col-md-6 ${styles.col}`}>
            <Card className={`${styles.card_right}`}>
              <Card.Body className={`${styles.card_body_text}`}>
                Somos uma loja especializada em joias de prata e Rommanel,
                oferecendo uma ampla variedade de produtos elegantes e sofisticados para quem busca qualidade e beleza em suas peças.
                Com uma seleção cuidadosa de itens, nossos clientes podem encontrar desde colares e brincos até pulseiras e anéis,
                sempre com um acabamento impecável e design exclusivo.
                Além disso, nossa equipe está sempre pronta para oferecer um atendimento personalizado e ajudar a escolher a peça perfeita para cada ocasião.
                Venha conhecer a Elegance e se encantar com nossas joias de alta qualidade e bom gosto.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
