// import React, { useState } from 'react';
// import { Button, Card, Row, Col } from 'react-bootstrap';
// import { pizzaCart } from '../pizzas';

// const Cart = () => {
//   const [cart, setCart] = useState(pizzaCart);
  
//   const handleIncrease = (id) => {
//     const newCart = cart.map(pizza => {
//       if (pizza.id === id) {
//         pizza.count += 1;
//       }
//       return pizza;
//     });
//     setCart(newCart);
//   };

//   const handleDecrease = (id) => {
//     const newCart = cart.map(pizza => {
//       if (pizza.id === id) {
//         pizza.count = Math.max(pizza.count - 1, 0);
//       }
//       return pizza;
//     }).filter(pizza => pizza.count > 0);
//     setCart(newCart);
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
//   };

//   return (
//     <container className="mt-4">
//       <h2 className="text-center me-5 mt-3 mb-4">Detalles de la compra:</h2>
//       <Row className="d-flex justify-content-center align-items-center">
//         {cart.map((pizza) => (
//           <Col key={pizza.id} sm={12} md={6} lg={8} className="mb-3 d-flex align-items-center">
//             <Card  style={{ width: '12rem' }} className=" shadow-lg h-100 w-100 d-flex flex-row ms-5 me-5">
//               <Card.Img variant="top" src={pizza.img} alt={pizza.name} style={{ width: '160px', height: '160px', objectFit: 'cover', borderRadius:'11px', marginLeft:"4rem"}} className='mt-2 mb-2'/>
//               <Card.Body style={{ marginLeft: '4rem' }}>
//                 <Card.Title className="text-capitalize fs-3">{pizza.name}</Card.Title>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="d-flex justify-content-center align-items-center fs-5"><strong>${pizza.price}</strong></div>
//                   <div className="d-flex justify-content-end align-items-center">
//                     <Button onClick={() => handleIncrease(pizza.id)} variant="outline-success" size="lg" style={{ marginRight: '3rem' }}>+</Button>
//                     <Button onClick={() => handleDecrease(pizza.id)} variant="outline-danger" size="lg" style={{ marginRight: '10rem' }}>-</Button>
//                   </div>
//                 </div>
//                 <Card.Text className='fs-6'><strong>Cantidad: {pizza.count}</strong></Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <h3 className="text-center mt-4">Total: ${calculateTotal()}</h3>

//       <Button variant="success" style={{ width: '100px', height: '50px'}} className="mx-auto d-block mt-3">Pagar</Button>
//     </container>
//   );
// };
// export default Cart;



// HITO 6
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQty, decreaseQty, total } = useCart();
  
  return (
    <container className="mt-4">
      <h2 className="text-center me-5 mt-3 mb-4">Detalles de la compra:</h2>
      <Row className="d-flex justify-content-center align-items-center">
        {cart.map((pizza) => (
          <Col key={pizza.id} sm={12} md={6} lg={8} className="mb-3 d-flex align-items-center">
            <Card  style={{ width: '12rem' }} className=" shadow-lg h-100 w-100 d-flex flex-row ms-5 me-5">
              <Card.Img 
                variant="top" 
                src={pizza.img} 
                alt={pizza.name} 
                style={{ width: '160px', height: '160px', objectFit: 'cover', borderRadius:'11px', marginLeft:"4rem"}} 
                className='mt-2 mb-2'
              />
              <Card.Body style={{ marginLeft: '4rem' }}>
                <Card.Title className="text-capitalize fs-3">{pizza.name}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-center align-items-center fs-5">
                    <strong>${pizza.price}</strong>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <Button 
                      onClick={() => increaseQty(pizza.id)}
                      variant="outline-success" 
                      size="lg" 
                      style={{ marginRight: '3rem' }}
                    >
                      +
                    </Button>
                    <Button 
                      onClick={() => decreaseQty(pizza.id)}
                      variant="outline-danger" 
                      size="lg" 
                      style={{ marginRight: '10rem' }}
                    >
                      -
                    </Button>
                  </div>
                </div>
                <Card.Text className='fs-6'>
                  <strong>Cantidad: {pizza.quantity}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h3 className="text-center mt-4">Total: ${total}</h3>

      <Button 
        variant="success" 
        style={{ width: '100px', height: '50px'}} 
        className="mx-auto d-block mt-3"
      >
        Pagar
      </Button>
    </container>
  );
};

export default Cart;