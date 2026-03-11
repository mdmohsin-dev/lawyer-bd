import { use, useContext, useState } from "react";
import { LawyerContext } from "../../providers/LawyerProvider";
import Lawyer from "./Lawyer";

const Lawyers = () => {

    const { lawyers } = useContext(LawyerContext)
    const [showAll, setShowAll] = useState(false)

    const showLawyers = showAll ? lawyers : lawyers.slice(0, 6)

    return (
        <div className='text-black my-24'>
            <div className="text-center">
                <h3 className="text-4xl font-bold">Our Best Lawyers</h3>
                <p className="pt-4">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="grid grid-cols-2 gap-11 mt-10">
                {
                    showLawyers.map(lawyer => <Lawyer lawyer={lawyer}></Lawyer>)
                }
            </div>
            {
                !showAll && <button onClick={() => setShowAll(true)}
                className="btn flex justify-self-center mt-10 px-12">Show All</button>
            }
        </div>
    );
};

export default Lawyers;