import React from "react";

import { render, screen, fireEvent } from '@testing-library/react';
import ComponentRegistryButton from ".";

test("Check if it renders a button and it has the label if a pass it", () => {
    render(<ComponentRegistryButton label="Click me" />);

    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
});

test("Check if it renders a button and it runs the function on click", () => {
    const handleClick = jest.fn();

    render(<ComponentRegistryButton label="Click me" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});