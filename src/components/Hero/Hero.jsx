import { motion } from "framer-motion";
import "../Hero/Hero.css";

function Hero() {
    return (
        <section className="hero">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="hero-title"
            >
                E.PORTFOLIO
            </motion.h1>

            <motion.div
                className="hero-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <p><span>Name: </span> MOHAMMED RUKSANA</p>
                <p><span>HTNO: </span> 6298-24-701-028</p>
                <p><span>Method-1: </span> Bio-Science</p>
                <p><span>Method-2: </span> English</p>
            </motion.div>
        </section>
    );
}

export default Hero;