import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../pages/Register";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach } from "vitest";

describe("Register component", () => {
  beforeEach(() => {
    localStorage.removeItem("usuarios");
  });

  it("Muestra inputs y botones", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Crear cuenta/i })).toBeInTheDocument();
  });

  it("Muestra errores si datos invalidos", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button", { name: /Crear cuenta/i }));
    expect(screen.getByText(/El nombre no puede estar vacío./i)).toBeInTheDocument();
    expect(screen.getByText(/El correo es obligatorio./i)).toBeInTheDocument();
    expect(screen.getByText(/La contraseña es obligatoria./i)).toBeInTheDocument();
  });

  it("Crea una cuenta y la guarda en localStorage", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByLabelText(/Nombre completo/i), { target: { value: "Usuario Test" } });
    fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: "user@test.com" } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: "abcd" } });
    fireEvent.click(screen.getByRole("button", { name: /Crear cuenta/i }));

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    expect(Array.isArray(usuarios)).toBeTruthy();
    const creado = usuarios.find((u: any) => u.correo === "user@test.com");
    expect(creado).toBeTruthy();
    expect(localStorage.getItem("usuarioNombre")).toBe("Usuario Test");
  });
});
