import { useState } from "react";
import Hero from "../components/Hero/Hero";
import MemoryCard from "../components/card/MemoryCard";
import MemoryModal from "../components/Modal/MemoryModal";
import { memories } from "../data/memories";
import "../pages/Home.css"
import Footer from "../components/Footer/Footer";

function Home() {

    const [selected, setSelected] = useState(null);

    return (
        <>
            <Hero />

            <div className="grid">
                {
                    memories.map(memory => (
                        <MemoryCard
                            key={memory.id}
                            memory={memory}
                            onOpen={setSelected}
                        />
                    ))
                }
            </div>

            <MemoryModal
                memory={selected}
                close={() => setSelected(null)}
            />
            <Footer />
        </>
    );
}

export default Home;