
import {Container} from "react-bootstrap";

const Header = () => {
    return (
    <Container fluid className="text-center my-5">
        <h1 className="display-4 fw-bold text-shadow">¡Bienvenido a Pizzería Mamma Mía!</h1>
        <p className="lead text-muted">¡Tenemos las mejores pizzas que podrás encontrar! 🍕</p>
    </Container>
    );
};


export default Header;