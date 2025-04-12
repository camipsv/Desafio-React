export default function Profile() {
 const userEmail = "usuario@gmail.com"

 return (
   <div className="container mt-5">
     <h2>Perfil de usuario</h2>
     <p>Email: {userEmail}</p>
     <button className="btn btn-primary">Cerrar sesión</button>
   </div>
 )
}
