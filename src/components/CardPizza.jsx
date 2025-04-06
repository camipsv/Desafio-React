// HITO 1
// import { Card, Button} from "react-bootstrap";

// const CardPizza = ({ name, price, ingredients, img }) => {
//     return (
//         <Card className="h-100 shadow">
//             <Card.Img variant="top" src={img} />
//             <Card.Body className="d-flex flex-column">
//                 <Card.Title className="fs-2">{name}</Card.Title>
//                 <h4 className="mt-3"><strong>Ingredientes:</strong></h4>
//                 <h6 className="d-flex flex-wrap">
//                     {ingredients.map((ing, idx) => (
//                         <>
//                             <span key={idx}>{ing}</span>
//                             {idx < ingredients.length - 1 && <span>, </span>}
//                         </>
//                     ))}
//                 </h6>
//                 <h5 className="mt-auto strong">
//                     Precio: {price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
//                 </h5>
//                 <div className="d-flex justify-content-between mt-2">
//                     <Button variant="primary">Ver más</Button>
//                     <Button variant="success">Añadir</Button>
//                 </div>
//             </Card.Body>
//         </Card>
//     );
// };

// export default CardPizza;



// HITO 3
import { Card, ListGroup, Button } from 'react-bootstrap';

const CardPizza = ({ id, name, desc, img, ingredients, price }) => {
  return (
    <Card style={{ width: '25rem', minHeight: '350px'}} className="h-100 mb-3 shadow-sm">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title className="text-capitalize">{name}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
          ID: {id}
        </Card.Text>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>Ingredientes</Card.Title>
        <ListGroup variant="flush" className="mb-2">
          {ingredients.map((item, i) => (
            <ListGroup.Item key={i}>{item}</ListGroup.Item>
            ))}
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Text>
          <strong>Precio:</strong> ${price}
        </Card.Text>
        <Button variant="success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;