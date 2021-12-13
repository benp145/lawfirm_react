import { createContext, useContext, useEffect, useState } from "react";

export const ServiceContext = createContext();



export const ServiceProvider = (props) => {
    const [search, setSearch] = useState([]);

    const values = { search, setSearch };

    return (
        <ServiceContext.Provider value={values}>
            {props.children}
        </ServiceContext.Provider>
    )

}