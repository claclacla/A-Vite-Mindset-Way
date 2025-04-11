import React from "react";

import { render, screen } from '@testing-library/react';
import ComponentRenderer from ".";

test("Check if it renders a button when the type is button", () => {
    render(<ComponentRenderer type="button" props={{ label: "Click me" }} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});