import { createContext, useEffect, useState } from "react";
import { getLawyer } from "../utility/addToDb";

export const LawyerContext = createContext([])

const LawyerProvider = ({ children }) => {

    const [lawyers, setLwayers] = useState([])
    const [storedLawyer, setStoredLawyer] = useState()

    useEffect(() => {
        fetch("/lawyer.json")
            .then(res => res.json())
            .then(data => setLwayers(data))
    }, [])

    useEffect(() => {
        const data = getLawyer()
        setStoredLawyer(data)
    }, [])


    const value = {
        lawyers, setLwayers, storedLawyer,setStoredLawyer
    }

    return (
        <LawyerContext.Provider value={value}>
            {children}
        </LawyerContext.Provider>
    );
};

export default LawyerProvider;