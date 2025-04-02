
import { Button, Container, Nav, Navbar as BsNavbar } from "react-bootstrap";


const Navbar = () => {
    const total = 25000;
    // const token = false;
    return (
      <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container fluid className="px-4 d-flex justify-content-between align-items-center">
        <Nav className="d-flex gap-2">
          <h3>Pizzería Mamma Mia</h3>
          <Button variant="outline-light">Home 🍕 </Button>
          <Button variant="outline-light">Login 🔑</Button>
          <Button variant="outline-light">Profile 🧍‍♂️</Button>
          <Button variant="outline-light">Register 🆕</Button>
          <Button variant="outline-light">Logout 🔐</Button>
        </Nav>
        <Button variant="success">
          🛒 Total:{total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
        </Button>
      </Container>
    </BsNavbar>
  )
}

export default Navbar;