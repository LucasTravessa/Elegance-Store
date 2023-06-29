import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return(
        <Navbar bg="light" variant="light">
            <Container>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Fotos</Nav.Link>
                    <Nav.Link>Informations</Nav.Link>
                </Nav>
                <Navbar.Brand 
                href="#home"
                >
                    Elegance
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>Whatsapp</Nav.Link>
                    <Nav.Link>Instagram</Nav.Link>
                    <Nav.Link>Facebook</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}