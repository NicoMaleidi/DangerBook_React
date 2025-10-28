import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errores, setErrores] = useState({ nombre: "", correo: "", contrasena: "" });
  const navigate = useNavigate();

  const validar = () => {
    const nuevos = { nombre: "", correo: "", contrasena: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim()) nuevos.nombre = "El nombre no puede estar vacío.";
    if (!correo.trim()) nuevos.correo = "El correo es obligatorio.";
    else if (!emailRegex.test(correo)) nuevos.correo = "Formato de correo inválido.";
    if (!contrasena.trim()) nuevos.contrasena = "La contraseña es obligatoria.";
    else if (contrasena.length < 4) nuevos.contrasena = "La contraseña debe tener al menos 4 caracteres.";

    setErrores(nuevos);
    return Object.values(nuevos).every((v) => v === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    // Guardamos usuario en localStorage (simulación)
    const usuariosRaw = localStorage.getItem("usuarios") || "[]";
    const usuarios = JSON.parse(usuariosRaw) as Array<{ correo: string; contrasena: string; nombre: string }>;

    // Prevent duplicate email
    if (usuarios.some((u) => u.correo === correo)) {
      setErrores({ ...errores, correo: "Ya existe un usuario con este correo." });
      return;
    }

    usuarios.push({ nombre, correo, contrasena });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioNombre", nombre);

    // redirect to home
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5 mb-5 text-light">
      <h2 className="text-center text-warning mb-5">Registro</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card bg-dark text-light p-4 shadow-lg border border-warning">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                />
                {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input
                  id="correo"
                  type="email"
                  className={`form-control ${errores.correo ? "is-invalid" : ""}`}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="tu@ejemplo.com"
                />
                {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <input
                  id="contrasena"
                  type="password"
                  className={`form-control ${errores.contrasena ? "is-invalid" : ""}`}
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                  placeholder="Mínimo 4 caracteres"
                />
                {errores.contrasena && <div className="invalid-feedback">{errores.contrasena}</div>}
              </div>

              <div className="d-flex gap-3">
                <button type="submit" className="btn btn-warning flex-grow-1 fw-bold">Crear cuenta</button>
                <button type="button" className="btn btn-secondary flex-grow-1" onClick={() => (window.location.href = "/login")}>Ir a Login</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
