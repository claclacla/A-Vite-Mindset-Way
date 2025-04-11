import React from "react";

import { render, screen, within, fireEvent } from '@testing-library/react';
import App from "./App";

test("Check if there isn't a 'Clicked!' text if button hasn't been clicked", () => {
    render(<App/>);

    const buttonClickedMessage = screen.queryByTitle("Clicked!");
    expect(buttonClickedMessage).toBeNull();
});

test("Check if there's a button in the 'container'", () => {
    render(<App/>);

    const container = screen.getByTitle("container");
    expect(container).toBeInTheDocument();

    const button = within(container).getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
});


test("Check if there's a text 'Clicked!' when click the button", () => {
    render(<App/>);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    const buttonClickedMessage = screen.getByText("Clicked!");
    expect(buttonClickedMessage).toBeInTheDocument();
});