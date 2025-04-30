// HITO 8
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

const Login = () => {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setErrorMessage('');
    setSuccessMessage('');

    if (!email || !password) {
      return setErrorMessage("Todos los campos son obligatorios");
    }
    if (password.length < 6) {
      return setErrorMessage("La contraseña debe tener al menos 6 caracteres");
    }

    try {
      const response = await login({ email, password });
      console.log('Login response:', response);
  
      setSuccessMessage("¡Inicio de sesión exitoso!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch{
      setErrorMessage("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label className="fw-bold fs-6">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label className="fw-bold fs-6">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Iniciar Sesión</Button>
      </Form>

      {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
    </div>
  );
};

export default Login;




// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

// const handleSubmit = (e) => {
//   e.preventDefault(); 
//   setErrorMessage('');
//   setSuccessMessage('');
    
// const registeredEmail = localStorage.getItem('registeredEmail');
// const registeredPassword = localStorage.getItem('registeredPassword');
    
// const errors = {
//   emptyFields: !email || !password,
//   shortPassword: password.length < 6,
//   invalidCredentials: email !== registeredEmail || password !== registeredPassword
// };

// if (errors.emptyFields) return setErrorMessage('Todos los campos son obligatorios');
// if (errors.shortPassword) return setErrorMessage('La contraseña debe tener al menos 6 caracteres');
// if (errors.invalidCredentials) return setErrorMessage('Email o contraseña incorrectos');

// setSuccessMessage('¡Inicio de sesión exitoso!');
// };

//   return (
//     <div className="container mt-5">
//       <h2>Iniciar Sesión</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formEmail" className="mb-3">
//             <Form.Label className="fw-bold fs-6">Email</Form.Label>
//             <Form.Control
//             type="email"
//             placeholder="Introduce tu email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             />
//           </Form.Group>

//           <Form.Group controlId="formPassword" className="mb-3">
//             <Form.Label className="fw-bold fs-6">Contraseña</Form.Label>
//             <Form.Control
//             type="password"
//             placeholder="Introduce tu contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             />
//           </Form.Group>
        
//           <Button variant="primary" type="submit" className="mt-3">Iniciar Sesión</Button>
//         </Form>

//       {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
//       {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
//     </div>
//   );
// };

// export default Login

// HITO 7
// const Login = () => {
//   const { login } = useContext(UserContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const navigate = useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault(); 
//   setErrorMessage('');
//   setSuccessMessage('');
    
// if (!email || !password) return setErrorMessage("Todos los campos son obligatorios");
// if (password.length < 6) return setErrorMessage("La contraseña debe tener al menos 6 caracteres");

// // Login estático
// if (email === "cami@gmail.com" && password === "123456") {
//   setSuccessMessage("¡Inicio de sesión exitoso!");
//   login({ email, password, nombre: "Camila Soto Valenzuela" });


//   setTimeout(() => {
//     navigate("/");
//   }, 1000);
// } else {
//   setErrorMessage("Email o contraseña incorrectos");
// }
// };
//   return (
//     <div className="container mt-5">
//       <h2>Iniciar Sesión</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formEmail" className="mb-3">
//             <Form.Label className="fw-bold fs-6">Email</Form.Label>
//             <Form.Control
//             type="email"
//             placeholder="Introduce tu email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             />
//           </Form.Group>

//           <Form.Group controlId="formPassword" className="mb-3">
//             <Form.Label className="fw-bold fs-6">Contraseña</Form.Label>
//             <Form.Control
//             type="password"
//             placeholder="Introduce tu contraseña"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             />
//           </Form.Group>
        
//           <Button variant="primary" type="submit" className="mt-3">Iniciar Sesión</Button>
//         </Form>

//       {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
//       {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
//     </div>
//   );
// };

// export default Login;
