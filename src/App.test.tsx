import React from "react";

import { render, screen, within,fireEvent } from '@testing-library/react';
import App from "./App";

test("Check if there isn't a 'button-clicked' text 'Clicked!'", () => {
    render(<App/>);

    const buttonClickedMessage = screen.queryByTitle("button-clicked");
    expect(buttonClickedMessage).toBeNull();
});

test("Check if there's a 'click-button' with a Tailwind class text-red-800 in the form 'main-form'", () => {
    render(<App/>);

    const loginForm = screen.getByTitle("main-form");
    expect(loginForm).toBeInTheDocument();

    const button = within(loginForm).getByTitle("click-button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-red-800");
});


test("Check if there's a 'button-clicked' with the text 'Clicked!' when click the button", () => {
    render(<App/>);

    const button = screen.getByTitle("click-button");
    fireEvent.click(button);

    const buttonClickedMessage = screen.getByTitle("button-clicked");
    expect(buttonClickedMessage).toBeInTheDocument();
    expect(buttonClickedMessage).toHaveTextContent("Clicked!");
});