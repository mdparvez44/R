import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            whileTap={{ scale: 0.8 }}
            className="theme-toggle"
            onClick={toggleTheme}
        >
            {darkMode ? <FaSun /> : <FaMoon />}
        </motion.button>
    );
}

export default ThemeToggle;