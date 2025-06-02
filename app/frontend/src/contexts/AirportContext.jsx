import React, { createContext, useContext, useState } from "react";

const AirportContext = createContext();

export function AirportProvider({ children }) {
    const [selectedAirport, setSelectedAirport] = useState('');

    return (
        <AirportContext.Provider value={{ selectedAirport, setSelectedAirport }}>
            {children}
        </AirportContext.Provider>
    );
}

export function useAirport(){
    return useContext(AirportContext);
}