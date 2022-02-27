import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>PokeApp</Navbar.Brand>

        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/my-pokemon'>My Pokemnon</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
