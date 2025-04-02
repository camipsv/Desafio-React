
import { Card, Button} from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card className="h-100 shadow">
            <Card.Img variant="top" src={img} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-2">{name}</Card.Title>
                <h4 className="mt-3"><strong>Ingredientes:</strong></h4>
                <h6 className="d-flex flex-wrap">
                    {ingredients.map((ing, idx) => (
                        <>
                            <span key={idx}>{ing}</span>
                            {idx < ingredients.length - 1 && <span>, </span>}
                        </>
                    ))}
                </h6>
                <h5 className="mt-auto strong">
                    Precio: {price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
                </h5>
                <div className="d-flex justify-content-between mt-2">
                    <Button variant="primary">Ver más</Button>
                    <Button variant="success">Añadir</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;