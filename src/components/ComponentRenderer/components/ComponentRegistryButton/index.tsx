import React from "react";

import { Button } from '@/components/ui/button';

export interface ComponentRegistryButtonProps {
    label: string,
    onClick?: () => void
}

export default function ComponentRegistryButton({ label, onClick }: ComponentRegistryButtonProps) {
    return (
        <Button className="text-red-800" onClick={onClick}>{label}</Button>
    );
}