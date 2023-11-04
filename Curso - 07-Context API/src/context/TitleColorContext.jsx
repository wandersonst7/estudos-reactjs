import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    // switch
    switch(action.type) {
        case "GREY":
            return {...state, color: "#545454"};
        case "RED":
            return {...state, color: "red"};
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" })
    
    // debug
    // console.log("Title color context: ", state)
    

    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )

}