import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errores, setErrores] = useState({ correo: "", contrasena: "" });
  const navigate = useNavigate();

  const validar = () => {
    const nuevos = { correo: "", contrasena: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correo.trim()) nuevos.correo = "El correo es obligatorio.";
    else if (!emailRegex.test(correo)) nuevos.correo = "Formato de correo inválido.";

    if (!contrasena.trim()) nuevos.contrasena = "La contraseña es obligatoria.";
    else if (contrasena.length < 4) nuevos.contrasena = "La contraseña es muy corta.";

    setErrores(nuevos);
    return Object.values(nuevos).every((v) => v === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    // Simulamos login con datos guardados en localStorage por Register
    const usuariosRaw = localStorage.getItem("usuarios") || "[]";
    const usuarios = JSON.parse(usuariosRaw) as Array<{ correo: string; contrasena: string; nombre?: string }>;
    const usuario = usuarios.find((u) => u.correo === correo && u.contrasena === contrasena);

    if (!usuario) {
      setErrores({ ...errores, contrasena: "Correo o contraseña incorrectos." });
      return;
    }

    // Guarda el nombre pa ponerlo en navbar
    localStorage.setItem("usuarioNombre", usuario.nombre || usuario.correo.split("@")[0]);
    // redirigir a home
    navigate("/", { replace: true });
  };

  return (
    <div className="container mt-5 mb-5 text-light">
      <h2 className="text-center text-warning mb-5">Login</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card bg-dark text-light p-4 shadow-lg border border-warning">
            <form onSubmit={handleSubmit} noValidate>
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
                  placeholder="*******"
                />
                {errores.contrasena && <div className="invalid-feedback">{errores.contrasena}</div>}
              </div>

              <div className="d-flex gap-3">
                <button type="submit" className="btn btn-warning flex-grow-1 fw-bold">Ingresar</button>
                <button type="button" className="btn btn-secondary flex-grow-1" onClick={() => (window.location.href = "/registro")}>Registro</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
