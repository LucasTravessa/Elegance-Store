import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <div className="bgPrimary">
      <Container className="my-5 p-5">
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="g-4 text-center">
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
