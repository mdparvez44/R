import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import ThemeToggle from "../Toggle/ThemeToggle";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;

            setScrolled(currentY > 30);

            if (currentY > lastScrollY && currentY > 80) {
                setVisible(false); // scroll down → hide
            } else {
                setVisible(true); // scroll up → show
            }

            lastScrollY = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? "navbar-scroll" : ""} ${visible ? "nav-show" : "nav-hide"
                    }`}
            >
                <div className="logo">
                    <span className="logo-dot"></span>
                    <span className="logo-text">MOHAMMED RUKSANA</span>
                </div>
            </motion.nav>

            <div className={`theme-toggle ${visible ? "nav-show" : "nav-hide"}`}>
                <ThemeToggle />
            </div>
        </>
    );
}

export default Navbar;