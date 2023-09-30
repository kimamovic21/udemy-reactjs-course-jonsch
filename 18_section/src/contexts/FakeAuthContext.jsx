import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext({ 
    //  autocompletion while destructuring properties from context
    isAuthenticated: false,
    user: {},
    login: () => {},
    logout: () => {},
});

const initialState = {
    user: null,
    isAuthenticated: false,
};

const reducer = (state, action) => {
    console.log(state, action);
    switch(action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            };

        case 'logout':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };
    
        default: 
            throw new Error('Unknown action!');
    };
};  

const FAKE_USER = {
    name: "Kerim",
    email: "imamovic.kerim@gmail.com",
    password: "123456789",
    avatar: "https://avatars.githubusercontent.com/u/79793398?s=400&u=af90eaec0cca8cb87fb523af6558e958a525c2e0&v=4",
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { user, isAuthenticated } = state;

    const login = (email, password) => {
        if (email === FAKE_USER.email && password === FAKE_USER.password) {
            dispatch({ type: 'login', payload: FAKE_USER });
        };  
    };

    const logout = () => {
        dispatch({ type: 'logout' });
    };

    return (
        <AuthContext.Provider value={{
                user: user,
                isAuthenticated: isAuthenticated,
                login: login,
                logout: logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('AuthContext was used outside AuthProvider');
    };

    return context;
};

export { AuthProvider, useAuth };