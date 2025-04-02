
import { Row, Col, Container } from "react-bootstrap";
import pizzaNapolitana from "../assets/img/pizza-napolitana.jpg";
import pizzaEspañola from "../assets/img/pizza-española.jpg";
import pizzaPepperoni from "../assets/img/pizza-pepperoni.jpg";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import fondoPizza from "../assets/img/Header.jpg";

const Home = () => {
    return (
      <>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(${fondoPizza})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h2 className="fw-bold">¡Pizzería Mamma Mía! 🍕</h2>
          <p className="lead">Donde cada rebanada cuenta una historia.</p>
        </div>
      </div>

      {/* Header actual */}
      <Header />

      {/* Lista de pizzas */}
      <Container fluid className="my-4 px-5">
        <Row className="g-4 justify-content-center">
          <Col xs={12} sm={6} md={4}>
            <CardPizza
              name="Pizza Napolitana"
              price={5950}
              ingredients={["Mozzarella", "Tomates", "Jamón", "Orégano."]}
              img={pizzaNapolitana}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardPizza
              name="Pizza Española"
              price={6950}
              ingredients={["Mozzarella", "Gorgonzola", "Parmesano", "Provolone."]}
              img={pizzaEspañola}
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <CardPizza
              name="Pizza Pepperoni"
              price={6950}
              ingredients={["Mozzarella", "Pepperoni", "Orégano."]}
              img={pizzaPepperoni}
            />
          </Col>
        </Row>
      </Container>
    </>
    )
  }
  
  
  export default Home;