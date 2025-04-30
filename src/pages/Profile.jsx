// HITO 8
import { useUser } from "../context/UserContext";
import { Button, Card } from "react-bootstrap";

const Profile = () => {
  const { user, logout } = useUser();

  if (!user) return <p className="m-5">No hay usuario logeado.</p>;

  return (
    <Card className="m-5 p-4 shadow">
      <h2 className="mb-3">Perfil de Usuario</h2>
      <p><strong>Correo:</strong> {user.email}</p>

      <Button variant="danger" onClick={logout} className="mt-3">
        Cerrar sesión
      </Button>
    </Card>
  );
};

export default Profile;





// export default function Profile() {
//  const userEmail = "usuario@gmail.com"

//  return (
//    <div className="container mt-5">
//      <h2>Perfil de usuario</h2>
//      <p>Email: {userEmail}</p>
//      <button className="btn btn-primary">Cerrar sesión</button>
//    </div>
//  )
// }


// HITO 7
// import { useUser } from "../context/UserContext";
// import { useState } from "react";
// import { Button, Card } from "react-bootstrap";

// const Profile = () => {
//   const { user, logout } = useUser();
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => setShowPassword(!showPassword);

//   if (!user) return <p className="m-5">No hay usuario logeado.</p>;

//   return (
//     <Card className="m-5 p-4 shadow">
//       <h2 className="mb-3">Perfil de Usuario</h2>
//       <p><strong>Nombre:</strong> {user.nombre}</p>
//       <p><strong>Correo:</strong> {user.email}</p>
//       <p>
//   <strong>Contraseña:</strong>{" "}
//   <input
//     type={showPassword ? "text" : "password"}
//     value={user.password}
//     readOnly
//     className="border-0 bg-transparent"
//     style={{ width: "100px" }}
//   />
//   <Button
//     variant="link"
//     onClick={togglePassword}
//     className="ms-2 p-0"
//   >
//     {showPassword ? "Ocultar" : "Mostrar"}
//   </Button>
// </p>
//       <Button variant="danger" onClick={logout} className="mt-3">
//         Cerrar sesión
//       </Button>
//     </Card>
//   );
// };

// export default Profile;
