import { useEffect, useState } from "react";

export const CelestialCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Track scroll to scale the "planet"
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollY / maxScroll;
            setScale(1 + scrollPercent * 2); // grows up to 3x
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="celestial-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: `translate(-50%, -50%) scale(${scale})`,
            }}
        />
    );
};
