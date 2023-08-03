import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Fotos() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  }

  return (
    <div className="bgPrimary">

      <Container className="d-none d-lg-block p-5 bgPrimary">
        <Row>
        <Col className="d-flex justify-content-center pb-3">
            <InstagramEmbed url="https://www.instagram.com/p/CvSpMufL9Ka/" width={328} height={656} />
          </Col>
          <Col className="d-flex justify-content-center pb-3">
            <InstagramEmbed url="https://www.instagram.com/p/CvQXcGsuGDs/" width={328} height={656} />
          </Col>
          <Col className="d-flex justify-content-center">
            <InstagramEmbed url="https://www.instagram.com/p/CvNxnRrO_m_/" width={328} height={656} />
          </Col>
        </Row>
      </Container>

      {/* Mobile carrousel */}
      <Container className="d-lg-none d-flex justify-content-center">
        <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <InstagramEmbed url="https://www.instagram.com/p/CvSpMufL9Ka/" width={328} height={656} />
          </Carousel.Item>
          <Carousel.Item>
            <InstagramEmbed url="https://www.instagram.com/p/CvQXcGsuGDs/" width={328} height={656} /> 
          </Carousel.Item>
          <Carousel.Item>
            <InstagramEmbed url="https://www.instagram.com/p/CvNxnRrO_m_/" width={328} height={656} />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
