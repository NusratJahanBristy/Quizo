import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbars() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="#home">Quizo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  p-3 d-flex justify-content-between p-3">
            <Link variant="info" className='' to="/home">Home</Link>
            <Link to="/Statistics">Statisics</Link>
             <Link className='text-center ' to="/blog">Blog</Link>
             
   
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;