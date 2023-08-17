import Image from "next/image";
import Container from "react-bootstrap/Container";
import styles  from "./fotos.module.css"
import Cardleft from "./assets/Cardleft.jpg"
import Cardcenter from "./assets/Cardcenter.jpg"
import Cardright from "./assets/Cardright.jpg"
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

      <div className={`d-flex flex-row justify-content-around ${styles.cards}`}>

        {/* Left */}
        <div className={`bgSecundary d-flex flex-column justify-content-center ${styles.card}`}>
          <Image src={Cardleft} alt="Cardleft" className={`mb-4 ${styles.img}`}/>
          <div className={`${styles.text}`}>
            <p>
              Os melhores brincos de prata
            </p>
          </div>
        </div>

        {/* Center */}
        <div className={`bgSecundary d-flex flex-column justify-content-center ${styles.card}`}>
          <Image src={Cardcenter} alt="Cardleft" className={`mb-4 ${styles.img}`}/>
          <div className={`${styles.text}`}>
            <p>
              Os melhores colares de ouro 
            </p>
          </div>
        </div>

        {/* Right */}
        <div className={`bgSecundary  d-flex flex-column justify-content-center ${styles.card}`}>
          <Image src={Cardright} alt="Cardleft" className={`mb-4 ${styles.img}`}/>
          <div className={`${styles.text}`}>
            <p>
              As melhores pulceiras de ouro
            </p>
          </div>
        </div>

      </div>

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
