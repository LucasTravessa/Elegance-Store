import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from'./header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faWhatsapp, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbarr = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [status, setStatus] = useState(true);

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

    const handleClick = () => {
      setStatus(!status);
    }

    return (
      <div>
        <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`} >
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
                      <Nav.Link className={styles.img}>
                          <FontAwesomeIcon icon={faInstagram} size='xl' style={{color:'white', paddingRight:'15px'}}></FontAwesomeIcon>
                      </Nav.Link>

                      <Nav.Link className={styles.img}>
                          <FontAwesomeIcon icon={faFacebook} size='xl' style={{color:'white', paddingRight:'15px'}}></FontAwesomeIcon>
                      </Nav.Link>

                      <Nav.Link className={styles.img}>
                          <FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                      </Nav.Link>

                      <Nav.Link className={styles.button}>
                        <FontAwesomeIcon onClick={handleClick} icon={faBars} size='xl'></FontAwesomeIcon>
                      </Nav.Link>
                  </Nav>
              </Container>
          </Navbar>

          {/* Submenu */}
          <nav className={`${status ? styles.nav_visible : styles.nav_hidden}`}>
            <Navbar id='headermob' style={{ flexDirection: 'column' }} expand='lg' className='bgTherd'>
              <Container style={{ flexDirection: 'column' }}>
                  <Nav style={{ flexDirection: 'column' }}>
                      <Nav.Link className={styles.text}>Home</Nav.Link>
                      <Nav.Link className={styles.text}>Fotos</Nav.Link>
                      <Nav.Link className={styles.text}>Informations</Nav.Link>                    
                  </Nav>

                  <Nav className={styles.sociais_media_icons}>
                      <Nav.Link >
                          <FontAwesomeIcon icon={faInstagram} size='xl' style={{color:'white', paddingRight:'15px'}}></FontAwesomeIcon>
                      </Nav.Link>
                      <Nav.Link >
                          <FontAwesomeIcon icon={faFacebook} size='xl' style={{color:'white', paddingRight:'15px'}}></FontAwesomeIcon>
                      </Nav.Link>
                      <Nav.Link >
                          <FontAwesomeIcon icon={faWhatsapp} size='xl' style={{color:'white'}}></FontAwesomeIcon>
                      </Nav.Link>
                  </Nav>
              </Container>
            </Navbar>
          </nav>
        </nav> 
      </div>
    );
  };  

export default function Header(){
    return(
      <Navbarr/>
    )
}