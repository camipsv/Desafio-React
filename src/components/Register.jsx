import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
        
  const errors = {
    emptyFields: !email || !password || !confirmPassword,
    shortPassword: password.length < 6,
    passwordsDontMatch: password !== confirmPassword
  };
  
  if (errors.emptyFields) return setErrorMessage('Todos los campos son obligatorios');
  if (errors.shortPassword) return setErrorMessage('La contraseña debe tener al menos 6 caracteres');
  if (errors.passwordsDontMatch) return setErrorMessage('Las contraseñas no coinciden');
  
  localStorage.setItem('registeredEmail', email);
  localStorage.setItem('registeredPassword', password);
    
  setSuccessMessage('¡Registro exitoso!');
  setErrorMessage('');
};

  return (
  <div className="container mt-5">
    <h2>Formulario de Registro</h2>
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

      <Form.Group controlId="formConfirmPassword" className="mb-3">
        <Form.Label className="fw-bold fs-6">Confirmar Contraseña</Form.Label>
        <Form.Control
        type="password"
        placeholder="Confirma tu contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        />
      </Form.Group>
            
      <Button variant="primary" type="submit" className="mt-3">Registrar</Button>
    </Form>
        
      {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
    </div>
  );
};

export default Register
