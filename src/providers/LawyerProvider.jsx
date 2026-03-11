import { createContext, useEffect, useState } from "react";

export const LawyerContext = createContext([])

const LawyerProvider = ({ children }) => {

    const [lawyers, setLwayers] = useState([])

    useEffect(() => {
        fetch("/lawyer.json")
            .then(res => res.json())
            .then(data => setLwayers(data))
    }, [])

    const value = {
        lawyers, setLwayers
    }

    return (
        <LawyerContext.Provider value={value}>
            {children}
        </LawyerContext.Provider>
    );
};

export default LawyerProvider;