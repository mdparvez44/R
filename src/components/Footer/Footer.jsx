import "./Footer.css";
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="footer-content">
                <h2>Internship Final Day</h2>

                <ul>
                    <li>
                        Developed effective Teaching Skills and classroom management
                        techniques.
                    </li>

                    <li>
                        Integrated ICT and Digital tools into the Teaching Learning
                        process.
                    </li>

                    <li>
                        Gained practical experience through school internship and field
                        engagement activities.
                    </li>
                </ul>

                <h3>Conclusion</h3>

                <p>
                    Through the B.Ed course, I have become a reflective practitioner
                    equipped with professional skills, pedagogical knowledge, and a
                    strong ethical foundation to fulfill my role as a teacher.
                </p>

                <div className="footer-line"></div>

                <span className="footer-end">
                    Thank you for being part of this journey.
                </span>
            </div>
        </motion.footer>
    );
}

export default Footer;