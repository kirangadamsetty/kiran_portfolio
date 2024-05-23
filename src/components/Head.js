import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Head = () => {
    return (
        <Navbar expand="lg" className="bg-dark fixed-top p-3">
          <Container>
         <Navbar.Brand href="/" className = "logo bg-danger">PORTFOLIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/" className = "nav-link">Home</Nav.Link>
                <Nav.Link href="/#about" className = "nav-link">About</Nav.Link>
                <Nav.Link href="/#skills" className = "nav-link">Skills</Nav.Link>
                <Nav.Link href="/#contact" className = "nav-link">Contact</Nav.Link>
                <NavDropdown title="Projects" className = "text-white" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/nicks-handyman-services">Nick's Handyman Services</NavDropdown.Item>
                  <NavDropdown.Item href="/bgadvisors">
                    BGAdvisors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/reenvision">Reenvision</NavDropdown.Item>
                 
                  <NavDropdown.Item href="/swiggy">
                  Swiggy Clone
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/youtube">
                  YouTube Clone
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
   


export default Head;