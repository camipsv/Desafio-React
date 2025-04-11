import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
// import pizzaNapolitana from "../assets/img/pizza-napolitana.jpg";
// import pizzaEspañola from "../assets/img/pizza-española.jpg";
// import pizzaPepperoni from "../assets/img/pizza-pepperoni.jpg";
import Header from "../components/Header";
import CardPizza from "./CardPizza";
// import pizzas from "../pizzas.js";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) throw new Error("Error al cargar las pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status" />
        <p>Cargando pizzas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <>
    {/* Banner */}
      <div
      style={{
        backgroundImage: 'url(/img/Header.jpg)',
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

    {/* Header*/}
    <Header />

    {/* HITO 2 */}
      {/* Lista de pizzas */}
      {/* <Container fluid className="my-4 px-5">
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
      </Container> */}

    {/* HITO 3 LISTA DE PIZZAS  */}
      {/* <Container className="mt-5">
        <Row className="g-5">
          {pizzas.map((pizza) => (
            <Col key={pizza.id} sm={12} md={6} lg={4} className="mb-4">
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                desc={pizza.desc}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
                />
            </Col>
          ))}
        </Row>
      </Container> */}
      
      {/* HITO 4 */}
      <Container className="mt-5">
      <h1 className="text-center mb-4">🍕 Nuestras Pizzas 🍕</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {pizzas.map(pizza => (
          <Col key={pizza.id}>
            <CardPizza pizza={pizza} />
          </Col>
        ))}
      </Row>
      </Container>
    </>
  )
}


export default Home;