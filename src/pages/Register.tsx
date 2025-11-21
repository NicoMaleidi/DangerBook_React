import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const validar = () => {
    const nuevos = {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      contrasena: "",
    };

    if (!nombre.trim()) nuevos.nombre = "El nombre es obligatorio.";
    if (!apellido.trim()) nuevos.apellido = "El apellido es obligatorio.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo.trim()) nuevos.correo = "El correo es obligatorio.";
    else if (!emailRegex.test(correo)) nuevos.correo = "Correo inválido.";

    const telefonoRegex = /^[0-9]{8,12}$/;
    if (!telefono.trim()) nuevos.telefono = "El teléfono es obligatorio.";
    else if (!telefonoRegex.test(telefono)) nuevos.telefono = "El teléfono debe tener entre 8 y 12 dígitos.";

    if (!contrasena.trim()) nuevos.contrasena = "Debes ingresar una contraseña.";
    else if (contrasena.length < 4)
      nuevos.contrasena = "La contraseña debe tener al menos 4 caracteres.";

    setErrores(nuevos);
    return Object.values(nuevos).every((x) => x === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    try {
      const response = await axios.post("http://localhost:8081/api/v1/usuarios", {
        nombre,
        apellido,
        email: correo,
        telefono,
        contrasena,
        id_rol: 1,
        id_estado: 1,
      });

      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (error) {
      alert("Error al registrar usuario");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 text-light">
      <h2 className="text-warning text-center">Registro</h2>

      <form onSubmit={handleSubmit} className="card bg-dark text-light p-4 shadow-lg border border-warning"
     style={{ maxWidth: "500px", margin: "0 auto" }}>

        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {errores.nombre && <small className="text-danger">{errores.nombre}</small>}
        </div>

        <div className="mb-3">
          <label>Apellido</label>
          <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          {errores.apellido && <small className="text-danger">{errores.apellido}</small>}
        </div>

        <div className="mb-3">
          <label>Correo</label>
          <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          {errores.correo && <small className="text-danger">{errores.correo}</small>}
        </div>

        <div className="mb-3">
          <label>Teléfono</label>
          <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          {errores.telefono && <small className="text-danger">{errores.telefono}</small>}
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
          {errores.contrasena && <small className="text-danger">{errores.contrasena}</small>}
        </div>

        <button className="btn btn-warning w-100 mt-3">Crear cuenta</button>
      </form>
    </div>
  );
};

export default Register;

