import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errores, setErrores] = useState({
    correo: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const validar = () => {
    const nuevos = { correo: "", contrasena: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo.trim()) nuevos.correo = "El correo es obligatorio.";
    else if (!regex.test(correo)) nuevos.correo = "Correo inválido.";

    if (!contrasena.trim()) nuevos.contrasena = "La contraseña es obligatoria.";

    setErrores(nuevos);
    return Object.values(nuevos).every((x) => x === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    try {
      const response = await axios.post("http://localhost:8081/api/v1/usuarios/login", {
        email: correo,
        contrasena,
      });

      const usuario = response.data;

      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("usuarioNombre", usuario.nombre);

      navigate("/");
    } catch (error) {
      setErrores({
        ...errores,
        contrasena: "Correo o contraseña incorrectos.",
      });
    }
  };

  return (
    <div className="container mt-5 text-light">
      <h2 className="text-warning text-center">Login</h2>

      <form onSubmit={handleSubmit} className="card bg-dark text-light p-4 shadow-lg border border-warning"
     style={{ maxWidth: "500px", margin: "0 auto" }}>

        <div className="mb-3">
          <label>Correo</label>
          <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          {errores.correo && <small className="text-danger">{errores.correo}</small>}
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input type="password" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
          {errores.contrasena && <small className="text-danger">{errores.contrasena}</small>}
        </div>

        <button className="btn btn-warning w-100">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;

