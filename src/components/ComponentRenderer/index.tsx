import React from "react";

import { ComponentRegistry, ComponentRegistryProps } from "./ComponentRegistry";

type ComponentType = keyof typeof ComponentRegistry;

interface Props<T extends ComponentType> {
    type: T,
    props: ComponentRegistryProps[T]
}

export default function ComponentRenderer<T extends ComponentType>({ type, props }: Props<T>) {
    const Component = ComponentRegistry[type] as React.ComponentType<ComponentRegistryProps[T]>;

    return (
        <Component {...props} />
    );
}