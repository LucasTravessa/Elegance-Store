import Image from "next/image";
import Container from "react-bootstrap/Container";
import styles from "./fotos.module.css";
import Cardleft from "./assets/Cardleft.jpg";
import Cardcenter from "./assets/Cardcenter.jpg";
import Cardright from "./assets/Cardright.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Fotos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bgPrimary">
      <div
        className={`d-none d-lg-flex flex-row justify-content-around ${styles.cards}`}
      >
        {/* Left */}
        <div
          className={`bgSecundary d-flex flex-column justify-content-center ${styles.card}`}
        >
          <Image
            src={Cardleft}
            alt="Cardleft"
            className={`mb-4 ${styles.img}`}
          />
          <div className={`${styles.text}`}>
            <p>Dê um toque de elegância ao seu visual com nossos Brincos</p>
          </div>
        </div>

        {/* Center */}
        <div
          className={`bgSecundary d-flex flex-column justify-content-center ${styles.card}`}
        >
          <Image
            src={Cardcenter}
            alt="Cardcenter"
            className={`mb-4 ${styles.img}`}
          />
          <div className={`${styles.text}`}>
            <p>Adorne seu estilo com os nossos Colares</p>
          </div>
        </div>

        {/* Right */}
        <div
          className={`bgSecundary  d-flex flex-column justify-content-center ${styles.card}`}
        >
          <Image
            src={Cardright}
            alt="Cardright"
            className={`mb-4 ${styles.img}`}
          />
          <div className={`${styles.text}`}>
            <p>Eleve seu estilo com as nossas Pulseiras</p>
          </div>
        </div>
      </div>

      {/* Mobile carrousel */}
      <Container className="d-lg-none d-flex justify-content-center">
        <Carousel slide={false} activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div
              className={`bgSecundary d-flex flex-column justify-content-center ${styles.card}`}
            >
              <Image
                src={Cardleft}
                alt="Cardleft"
                className={`mb-4 ${styles.img}`}
              />
              <div className={`${styles.text}`}>
                <p>Dê um toque de elegância ao seu visual com nossos Brincos</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className={`bgSecundary d-flex flex-column justify-content-center ${styles.card}`}
            >
              <Image
                src={Cardcenter}
                alt="Cardcenter"
                className={`mb-4 ${styles.img}`}
              />
              <div className={`${styles.text}`}>
                <p>Adorne seu estilo com os nossos Colares</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className={`bgSecundary  d-flex flex-column justify-content-center ${styles.card}`}
            >
              <Image
                src={Cardright}
                alt="Cardright"
                className={`mb-4 ${styles.img}`}
              />
              <div className={`${styles.text}`}>
                <p>Eleve seu estilo com as nossas Pulseiras</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
