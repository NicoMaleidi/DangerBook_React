import React, { useState } from "react";

    const Contacto: React.FC = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tu mensaje se ha enviado exitosamente`);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="main-content">
      <h1 className="text-white fw-bold display-5 mb-3">Contactanos</h1>
      <p className="lead text-white mb-4">
        Déjanos tu mensaje y te responderemos lo antes posible.
      </p>
      <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label text-white">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label text-white">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            className="form-control"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
            rows={4}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-light w-100">
          Enviar
        </button>
      </form>
    </div>
  );
}