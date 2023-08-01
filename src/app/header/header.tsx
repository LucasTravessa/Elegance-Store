import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from "react-bootstrap/Card";
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function Header(props: any) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [status, setStatus] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [prevScrollPos]);

  const handleClick = () => {
    setStatus(!status);
  }

  useEffect(() => {
    if (screenWidth > 992) {
      setStatus(false);
    }
  }, [screenWidth]);

  
  // smooth scrool
  const scrollDown = (ref:any) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`} >
      <Navbar style={{ zIndex: '1' }} expand='lg' className='bgTherd' >
        <Container>
          <Nav>
            <Nav.Link className={styles.nav} onClick={()=> scrollDown(props.home)}>Início</Nav.Link>
            <Nav.Link className={styles.nav} onClick={()=> scrollDown(props.fotos)}>Fotos</Nav.Link>
            <Nav.Link className={styles.nav} onClick={()=> scrollDown(props.info)}>Informações</Nav.Link>
          </Nav>
          <Navbar.Brand
            href="#home"
            style={{ color: 'white' }}
          >
            Elegance
          </Navbar.Brand>
          <Nav>
            <Nav.Link className={styles.img} href='https://www.instagram.com/elegance.rommanel/'>
              <FontAwesomeIcon icon={faInstagram} size='xl' style={{ color: 'white', paddingRight: '15px' }}></FontAwesomeIcon>
            </Nav.Link>

            <Nav.Link className={styles.img} href='https://www.facebook.com/elegancerommaneleprata/'>
              <FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: 'white', paddingRight: '15px' }}></FontAwesomeIcon>
            </Nav.Link>

            <Nav.Link className={styles.img} href='https://api.whatsapp.com/send?phone=5522998313480'>
              <FontAwesomeIcon icon={faWhatsapp} size='xl' style={{ color: 'white' }}></FontAwesomeIcon>
            </Nav.Link>

            <Card className={styles.card}>
              <Nav.Link className={styles.button}>
                <FontAwesomeIcon onClick={handleClick} icon={faBars} size='xl'></FontAwesomeIcon>
              </Nav.Link>
            </Card>
          </Nav>
        </Container>
      </Navbar>

      {/* Submenu */}
      <div className={`${screenWidth <= 992 ? styles.nav_visible : styles.nav_hidden2}`}>
        <nav className={`${status ? styles.nav_visible : styles.nav_hidden}`} id={styles.nav2}>
          <Navbar style={{ flexDirection: 'column', zIndex: '0' }} expand='lg' className='bgTherd rounded-bottom'>
            <Container style={{ flexDirection: 'column' }} className={styles.container}>
              <Nav style={{ flexDirection: 'column' }}>
                <Nav.Link className={styles.text}>Home</Nav.Link>
                <Nav.Link className={styles.text}>Fotos</Nav.Link>
                <Nav.Link className={styles.text}>Informations</Nav.Link>
              </Nav>

              <Nav className={styles.sociais_media_icons}>
                <Nav.Link >
                  <FontAwesomeIcon icon={faInstagram} size='xl' style={{ color: 'white', paddingRight: '15px' }}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link >
                  <FontAwesomeIcon icon={faFacebook} size='xl' style={{ color: 'white', paddingRight: '15px' }}></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link >
                  <FontAwesomeIcon icon={faWhatsapp} size='xl' style={{ color: 'white' }}></FontAwesomeIcon>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </nav>
      </div>
    </nav>
  )
}