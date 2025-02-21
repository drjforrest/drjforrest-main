import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

interface PresenceWrapperProps {
    children: ReactNode;
    initial?: boolean;
}

export const PresenceWrapper = ({ children, initial = false }: PresenceWrapperProps) => (
    <AnimatePresence initial={initial}>{children}</AnimatePresence>
);

