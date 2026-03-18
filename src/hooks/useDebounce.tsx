import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number, onSettle?: () => void) => {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(value);
            onSettle?.();
        }, delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debounced;
};