import { expectType } from 'tsd';

import { ComponentRegistry, ComponentRegistryProps } from "./ComponentRegistry";
import { ComponentRegistryButtonProps } from "./components/ComponentRegistryButton";

test("Component registry shoud contain an element with the key 'button'", () => {
    const element = ComponentRegistry["button"];
    expect(element).not.toBeNull();
});

test("Component registry props shoud contain an element with the key 'button'", () => {
    expectType<ComponentRegistryProps['button']>({ label: 'Click me' } as ComponentRegistryButtonProps);
});