import { createContext, useEffect, useContext, useReducer } from "react";

const BASE_URL = `http://localhost:8000`;

const CitiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: '',
};

const reducer = (state, action) => {
    // console.log(action.type);
    switch (action.type) { 
        case 'loading':
            return {
                ...state,
                isLoading: true,
            };

        case 'cities/loaded':
            return {
                ...state,
                isLoading: false,
                cities: action.payload,
            };

        case 'city/loaded':
            return {
                ...state,
                isLoading: false,
                currentCity: action.payload,
            };

        case 'city/created':
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload,
            };

        case 'city/deleted':
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter((city) => city.id !== action.payload),
                currentCity: {},
            };

        case 'rejected':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
            
        default: 
            throw new Error("Unknown action type");
    };
};

const CitiesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { cities, isLoading, currentCity, error } = state;

    useEffect(() => {
        const fetchCities = async () => {
            dispatch({ type: 'loading'}); 

            try {
                const response = await fetch(`${BASE_URL}/cities`);
                // console.log(response);
                const data = await response.json();
                // console.log(data);

                dispatch({ type: 'cities/loaded', payload: data })
            }
            catch {
                dispatch({ 
                    type: 'rejected', 
                    payload: 'There was an error loading cities...'
                });
            };
        };
        fetchCities();
    }, []);

    const getCity = async (id) => {
        if (Number(id) === currentCity.id) return;

        dispatch({ type: 'loading' });

        try {
            const response = await fetch(`${BASE_URL}/cities/${id}`);
            // console.log(response);
            const data = await response.json();
            // console.log(data);

            dispatch({ type: 'city/loaded', payload: data }); 
        }
        catch {
            dispatch({ 
                type: 'rejected', 
                payload: 'There was an error loading city...'
            });
        };
    };
    
    const createCity = async (newCity) => {
        dispatch({ type: 'loading' });    

        try {
            const response = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            // console.log(response);
            const data = await response.json();
            // console.log(data);

            dispatch({ type: 'city/created', payload: data });
        }
        catch {
            dispatch({ 
                type: 'rejected', 
                payload: 'There was an error creating the city...'
            });
        };
    };

    const deleteCity = async (id) => {
        dispatch({ type: 'loading' });

        try {
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: 'DELETE',
            });
            dispatch({ type: 'city/deleted', payload: id });
        }
        catch {
            dispatch({ 
                type: 'rejected', 
                payload: 'There was an error deleting the city...'
            });
        };
    };

    return (
        <CitiesContext.Provider 
            value={{ 
                cities: cities, 
                isLoading: isLoading,
                currentCity: currentCity,
                error: error,
                getCity: getCity,
                createCity: createCity,
                deleteCity: deleteCity
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
};

const useCities = () => {
    const context = useContext(CitiesContext);

    if (context === undefined) {
        throw new Error("CitiesContext was used outside the CitiesProvider");
    };
    
    return context;
};

export { CitiesProvider, useCities };



// import { createContext, useState, useEffect, useContext } from "react";

// const BASE_URL = `http://localhost:8000`;

// const CitiesContext = createContext();

// const CitiesProvider = ({ children }) => {
//     const [cities, setCities] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [currentCity, setCurrentCity] = useState({});

//     useEffect(() => {
//         const fetchCities = async () => {
//             try {
//                 setIsLoading(true); 
//                 const response = await fetch(`${BASE_URL}/cities`);
//                 console.log(response);
//                 const data = await response.json();
//                 console.log(data);
//                 setCities(data);
//             }
//             catch {
//                 alert(`There was an error loading data...`);
//             }
//             finally {
//                 setIsLoading(false);
//             };
//         };
//         fetchCities();
//     }, []);

//     const getCity = async (id) => {
//         try {
//             setIsLoading(true); 

//             const response = await fetch(`${BASE_URL}/cities/${id}`);
//             console.log(response);

//             const data = await response.json();
//             console.log(data);

//             setCurrentCity(data);
//         }
//         catch {
//             alert(`There was an error loading data...`);
//         }
//         finally {
//             setIsLoading(false);
//         };
//     };
    
//     const createCity = async (newCity) => {
//         try {
//             setIsLoading(true); 

//             const response = await fetch(`${BASE_URL}/cities`, {
//                 method: 'POST',
//                 body: JSON.stringify(newCity),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });
//             console.log(response);

//             const data = await response.json();
//             console.log(data);

//             setCities((cities) => {
//                 return [...cities, data];
//             });
//         }
//         catch {
//             alert(`There was an error creating city...`);
//         }
//         finally {
//             setIsLoading(false);
//         };
//     };

//     const deleteCity = async (id) => {
//         try {
//             setIsLoading(true); 

//             await fetch(`${BASE_URL}/cities/${id}`, {
//                 method: 'DELETE',
//             });

//             setCities((cities) => {
//                 console.log(cities);
//                 return cities.filter((city) => {
//                     console.log(city);
//                     return city.id !== id;
//                 })
//             });
//         }
//         catch {
//             alert(`There was an error deleting city...`);
//         }
//         finally {
//             setIsLoading(false);
//         };
//     };

//     return (
//         <CitiesContext.Provider 
//             value={{ 
//                 cities: cities, 
//                 isLoading: isLoading,
//                 currentCity: currentCity,
//                 getCity: getCity,
//                 createCity: createCity,
//                 deleteCity: deleteCity
//             }}
//         >
//             {children}
//         </CitiesContext.Provider>
//     );
// };

// const useCities = () => {
//     const context = useContext(CitiesContext);
//     if (context === undefined) {
//         throw new Error("CitiesContext was used outside the CitiesProvider");
//     };
//     return context;
// };

// export { CitiesProvider, useCities };