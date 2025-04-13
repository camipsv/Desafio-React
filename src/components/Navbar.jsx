// HITO 1 AL 4
// import { Button, Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

// const Navbar = () => {
//   const total = 25000;
//   // const token = false;
//     return (
//     <BsNavbar bg="dark" variant="dark" expand="lg">
//       <Container fluid className="px-4 d-flex justify-content-between align-items-center mt-2 mb-2">
//         <Nav className="d-flex gap-2">
//           <h4 className="text-white me-4 ms-4">¡Pizzería Mamma Mia!</h4>
//           <Button variant="outline-light">Home 🍕 </Button>
//           <Button variant="outline-light">Login 🔑</Button>
//           <Button variant="outline-light">Profile 🧍‍♂️</Button>
//           <Button variant="outline-light">Register 🆕</Button>
//           <Button variant="outline-light">Logout 🔐</Button>
//         </Nav>
//         <Button variant="success">
//           🛒 Total:{total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
//         </Button>
//       </Container>
//     </BsNavbar>
//   )
// }

// export default Navbar;

// // HITO 5
// import { Link } from "react-router-dom"
// import { Navbar, Nav, Container, Button } from "react-bootstrap"

// export default function MyNavbar() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía 🍕</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Inicio</Nav.Link>
//             <Nav.Link as={Link} to="/register">Registro</Nav.Link>
//             <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
//             <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
//           </Nav>
//           <Button as={Link} to="/cart" variant="success">
//             🛒 Total: $0
//           </Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }


// HITO 6
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { useCart } from "../context/CartContext"

export default function MyNavbar() {
  const { total } = useCart();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mía 🍕</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/register">Registro</Nav.Link>
            <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
            <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
          </Nav>
          <Button as={Link} to="/cart" variant="success">
            🛒 Total: ${total.toFixed(0)} 
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
