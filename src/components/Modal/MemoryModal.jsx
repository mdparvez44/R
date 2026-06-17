import { motion } from "framer-motion";
import "../Modal/Modal.css";

function MemoryModal({ memory, close }) {

    if (!memory) return null;

    return (
        <div className="modal-bg" onClick={close}>
            <motion.div
                className="modal"
                initial={{ scale: .5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                <img src={memory.image} />

                <h2>{memory.title}</h2>

                <p>{memory.story}</p>
            </motion.div>
        </div>
    );
}

export default MemoryModal;