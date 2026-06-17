import { motion } from "framer-motion";
import "../card/Card.css";

function MemoryCard({ memory, onOpen }) {
    return (
        <motion.div
            className="card-wrapper"
            whileHover={{ scale: 1.03 }}
            onClick={() => onOpen(memory)}
        >
            {/* TITLE (TOP) */}
            <div className="title">
                <h3>{memory.title}</h3>
            </div>

            {/* IMAGE */}
            <div className="card">
                <img src={memory.image} alt={memory.title} />
            </div>

            {/* STORY */}
            <div
                className="story"
                dangerouslySetInnerHTML={{
                    __html: memory.story
                        .replace(/\n/g, "<br/>")
                }}
            />
        </motion.div>
    );
}

export default MemoryCard;