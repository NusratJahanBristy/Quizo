import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbars() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="#home">Quizo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto  p-3 d-flex jusify-content-between p-3">
            <Link className='navbar-design' to="/home">Home</Link>
            <Link className='navbar-design' to="/Statistics">Statisics</Link>
             <Link className='navbar-design' to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;