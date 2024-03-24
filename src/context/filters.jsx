// Para crear el contexto usamos esta libreria
import { useState } from "react";
import { createContext } from "react";

// Paso 1: Crear Contexto
// Este es el contexto que debemos de consumir
export const FiltersContext = createContext()

// Paso 2: Crear el Provider , para proveer el contexto
// Y este es el que nos provee de acceso al proyecto
export function FiltersProvider({ children }) {

    //EL PROVIDER NO NECESARIAMIENTE DEBE SER UN ESTADO
    // PUEDE SER UN NUMERO O UNA VARIABLE


    /**
     * Ahora aqui crearemos un estado
     */
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 250
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider >
    )
}