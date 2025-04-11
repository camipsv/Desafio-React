import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001');
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error('Error al obtener los datos de la pizza:', error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4 text-capitalize">{pizza.name}</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <Card className="mb-4">
            <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
            <Card.Body>
              <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
              <Card.Text>
                <strong>Precio: </strong>${pizza.price}
              </Card.Text>
              <Card.Text>
                <strong>Descripción: </strong>{pizza.desc}
              </Card.Text>
              <Card.Text>
                <strong>Ingredientes: </strong>
                <ul className="text-capitalize">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="success">Agregar al Carrito 🛒</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pizza;