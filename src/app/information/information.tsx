// import Map from "./map";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./mapa"), { ssr: false });

export default function Info() {
  return (
    <Container className="mw-100 bgPrimary p-5">
      <Row className="justify-content-md-center">
        <Col lg="7">
          <Map />
        </Col>
      </Row>
    </Container>
  );
}
