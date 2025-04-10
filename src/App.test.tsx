import React from "react";

import { render, screen } from '@testing-library/react';
import App from "./App";

test("Render the login form", () => {
    render(<App/>);

    const loginForm = screen.getByTitle("main-container");
    expect(loginForm).toBeInTheDocument();
    expect(loginForm).toHaveTextContent("Hello guys!");
    expect(loginForm).toHaveClass("text-3xl font-bold text-blue-600");
});