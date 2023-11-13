import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';

export default function PagesList() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Opportunities</Nav.Link>
            <NavDropdown title="Submission" id="basic-nav-Submission">
              <NavDropdown.Item href="#action/3.1">Photo Submission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Digitial Submission
              </NavDropdown.Item>
             
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
