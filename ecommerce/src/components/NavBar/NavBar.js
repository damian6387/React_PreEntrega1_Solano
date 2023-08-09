import { CartWidget } from "../CartWidget/CartWidget";

//Componente NavBar
export const NavBar = () => {
  return (
    <nav>
      <div>
        <h1>The Green Corner</h1>
        <button>Home</button>
        <button>Coffee Shop</button>
        <button>Plant Shop</button>
        <CartWidget />
      </div>
    </nav>
  );
};

/*import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
*/
/*export const NavBar = () => {
  <> <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">The Green Corner</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Coffee Shop</Nav.Link>
      <Nav.Link href="#pricing">Plant Shop</Nav.Link>
    </Nav>
  </Container>
</Navbar>;</>
 };
*/
