import { render, screen, fireEvent } from "@testing-library/react";
import Contacto from "../pages/Contacto";
import { expect, it, describe } from "vitest";

describe("Contacto Component", () => {
    
    // prueba 1: Muestra los campos de formulario que están correctos
    it("Muestra los campos de nombre, correo, teléfono y mensaje", () => {
        render(<Contacto />);

        //verificar que los campos y etiquetas (Corregidas para que coincidan con "Correo")
        expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Teléfono/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
        

        expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Volver/i })).toBeInTheDocument();
    });

    // prubea 2: Muestra errores al presionar en enviar con campos vacíos
    it("Muestra los mensajes de error de validación cuando los campos están vacíos", () => {
        render(<Contacto />);
        fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

        expect(screen.getByText(/El nombre no puede estar vacío./i)).toBeInTheDocument();
        expect(screen.getByText(/El correo es obligatorio./i)).toBeInTheDocument();
        expect(screen.getByText(/El teléfono es obligatorio./i)).toBeInTheDocument();
        expect(screen.getByText(/El mensaje no puede estar vacío./i)).toBeInTheDocument();
    });

    // ´prueba 3: Permitir ingresar datos válidos
    it("Permite ingresar datos válidos en todos los campos del formulario", () => {
        render(<Contacto />);

        //obtener los elementos del input
        const nombreInput = screen.getByLabelText(/Nombre Completo/i);
        const correoInput = screen.getByLabelText(/Correo/i);
        const telefonoInput = screen.getByLabelText(/Teléfono/i);
        const mensajeInput = screen.getByLabelText(/Mensaje/i);

        //simular la entrada de datos
        fireEvent.change(nombreInput, { target: { value: "Pedro Prueba" } });
        fireEvent.change(correoInput, { target: { value: "pedro@prueba.com" } });
        fireEvent.change(telefonoInput, { target: { value: "99887766" } });
        fireEvent.change(mensajeInput, { target: { value: "Este es un mensaje de prueba con la longitud correcta." } });

        //verificar que los valores se hayan establecido utilizando getByDisplayValue
        expect(screen.getByDisplayValue("Pedro Prueba")).toBeInTheDocument();
        expect(screen.getByDisplayValue("pedro@prueba.com")).toBeInTheDocument();
        expect(screen.getByDisplayValue("99887766")).toBeInTheDocument();
        expect(screen.getByDisplayValue("Este es un mensaje de prueba con la longitud correcta.")).toBeInTheDocument();
    });
});