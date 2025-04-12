import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <img
        src="/img/404gato.jpg"
        alt="404 cute cat"
        style={{ maxWidth: "850px", marginBottom: "20px" }}
      />
      <h1>Error 404 - Página no encontrada</h1>
      <p>Ups... no pudimos encontrar lo que buscas 😢.</p>
      <Link to="/" className="btn btn-success">
        Volver al inicio
      </Link>
    </div>
  );
}
