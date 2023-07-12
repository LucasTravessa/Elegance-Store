import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from'./header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

const Navbarr = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
  
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    return (
      <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
        <Navbar expand='lg' className= 'bgTherd' >
            <Container>
                <Nav>
                    <Nav.Link className={styles.nav}>Home</Nav.Link>
                    <Nav.Link className={styles.nav}>Fotos</Nav.Link>
                    <Nav.Link className={styles.nav}>Informations</Nav.Link>
                </Nav>
                <Navbar.Brand 
                href="#home"
                style={{ color: 'white' }}
                >
                    Elegance
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <FontAwesomeIcon icon={faInstagram} size='xl' style={{color:'white', paddingRight:'15px'}}></FontAwesomeIcon>
                    </Nav.Link>
                    <Nav.Link>
                        <FontAwesomeIcon icon={faFacebook} size='xl' style={{color:'white', paddingRight:'15px'}}></FontAwesomeIcon>
                    </Nav.Link>
                    <Nav.Link>
                        <FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </nav>
    );
  };  

export default function Header(){
    return(
        <Navbarr/>
    )
}