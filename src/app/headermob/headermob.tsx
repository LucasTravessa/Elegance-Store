import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from'./headermob.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faWhatsapp, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbarr = () => {
    return (
      <div>
      <nav className={styles.nav}>
        <Navbar expand='lg' className= 'bgTherd' >
            <Container>
                <Nav>
                    <Nav.Link className={styles.text}>Home</Nav.Link>
                    <Nav.Link className={styles.text}>Fotos</Nav.Link>
                    <Nav.Link className={styles.text}>Informations</Nav.Link>                    
                </Nav>
                <Nav>
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
      </div>
    );
  };  

export default function Headermob(){
    return(
        <Navbarr/>
    )
}