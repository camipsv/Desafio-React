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
// import { Card, ListGroup, Button } from 'react-bootstrap';

// const CardPizza = ({ id, name, desc, img, ingredients, price }) => {
//   return (
//     <Card style={{ width: '25rem', minHeight: '350px'}} className="h-100 mb-3 shadow-sm">
//       <Card.Img variant="top" src={img} alt={name} />
//       <Card.Body>
//         <Card.Title className="text-capitalize">{name}</Card.Title>
//         <Card.Text className="text-muted" style={{ fontSize: '0.85rem' }}>
//           ID: {id}
//         </Card.Text>
//         <Card.Text>{desc}</Card.Text>
//       </Card.Body>
//       <Card.Body>
//         <Card.Title>Ingredientes</Card.Title>
//         <ListGroup variant="flush" className="mb-2">
//           {ingredients.map((item, i) => (
//             <ListGroup.Item key={i}>{item}</ListGroup.Item>
//             ))}
//         </ListGroup>
//       </Card.Body>
//       <Card.Body>
//         <Card.Text>
//           <strong>Precio:</strong> ${price}
//         </Card.Text>
//         <Button variant="success">Agregar al carrito</Button>
//       </Card.Body>
//     </Card>
//   );
// };



// HITO 4
// import { Card, Button } from "react-bootstrap";

// const CardPizza = ({ pizza }) => {
//   return (
//     <Card className="h-100">
//     <Card.Img variant="top" src={(pizza.img)} />
//     <Card.Body>
//       <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
//       <Card.Text>{pizza.desc}</Card.Text>
//       <ul className="text-capitalize">
//         {pizza.ingredients.map((ing, i) => (
//           <li key={i}>{ing}</li>
//         ))}
//       </ul>
//     </Card.Body>
//       <Card.Footer className="d-flex justify-content-between align-items-center">
//         <strong>${pizza.price}</strong>
//         <Button variant="success" size="sm">Agregar 🛒</Button>
//       </Card.Footer>
//     </Card>
//   );
// }
// export default CardPizza;


// HITO 6
// import { Card, Button, ListGroup } from "react-bootstrap"
// import { useCart } from "../context/CartContext" 
// export default function CardPizza({ pizza }) {
//   const { addToCart } = useCart();

//   return (
//     <Card className="cardcolor shadow h-100 d-flex flex-column card-hover">
//       <Card.Img
//         variant="top"
//         src={pizza.img}
//         alt={pizza.name}
//       />
//       <Card.Body className="d-flex flex-column">
//         <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
//         <Card.Text>{pizza.desc}</Card.Text>
//         <h6>Ingredientes:</h6>
//         <ListGroup className="text-capitalize" variant="flush">
//           {pizza.ingredients.map((ing, i) => (
//             <ListGroup.Item key={i} className="custom-line bg-color">• {ing}</ListGroup.Item>
//           ))}
//         </ListGroup>
//         <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
//           <strong className="ms-5 fs-5">Valor: ${pizza.price}</strong>
//           <Button className="btn-hover me-5" variant="success" onClick={() => addToCart(pizza)}>
//             Añadir 🛒
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   )
// }


// HITO 7 - 8
import { Card, Button, ListGroup } from "react-bootstrap"
import { useCart } from "../context/CartContext" 
import { Link } from "react-router-dom";

export default function CardPizza({ pizza }) {
  const { addToCart } = useCart();

  return (
    <Card className="cardcolor shadow h-100 d-flex flex-column card-hover">
      <Card.Img
        variant="top"
        src={pizza.img}
        alt={pizza.name}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-capitalize">{pizza.name}</Card.Title>
        {/* <Card.Text>{pizza.desc}</Card.Text> */}
        <h6>Ingredientes:</h6>
        <ListGroup className="text-capitalize" variant="flush">
          {pizza.ingredients.map((ing, i) => (
            <ListGroup.Item key={i} className="custom-line bg-color">• {ing}</ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex flex-column align-items-center mt-auto pt-3 gap-2">
          <strong className="fs-5">Valor: ${pizza.price}</strong>
          <div className="d-flex gap-2">
            <Button variant="success" onClick={() => addToCart(pizza)}>
              Añadir 🛒
            </Button>
            <Link to={`/pizza/${pizza.id}`}>
            <Button className="more">Ver más </Button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}