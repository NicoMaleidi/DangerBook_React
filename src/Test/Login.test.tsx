import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Login component", () => {
  beforeEach(() => {
    // añadir un usuario de prueba en localStorage para test
    localStorage.setItem("usuarios", JSON.stringify([{ nombre: "Test", correo: "test@d.com", contrasena: "1234" }]));
  });

  it("Muestra inputs y botones", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Ingresar/i })).toBeInTheDocument();
  });

  it("Muestra error con campos vacíos", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /Ingresar/i }));
    expect(screen.getByText(/El correo es obligatorio./i)).toBeInTheDocument();
    expect(screen.getByText(/La contraseña es obligatoria./i)).toBeInTheDocument();
  });

  it("Permite login con credenciales validas", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: "test@d.com" } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: "1234" } });
    fireEvent.click(screen.getByRole("button", { name: /Ingresar/i }));

    // después de login se guarda nombre en localStorage
    const nombre = localStorage.getItem("usuarioNombre");
    expect(nombre).toBe("Test");
  });
});
