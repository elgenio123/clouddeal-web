import { createContext, useReducer } from "react";
import data from "../data/regdata"

const initialState = {
    data,
    currentFieldIndex: 0,
    submitForm:  false,
};

const reducer = (state, action) => {
    
    switch (action.type){
        case "NEXT-BUTTON":
            const submit =  state.currentFieldIndex === state.data.length - 1
            const currentFieldIndex = submit ? 
                state.currentFieldIndex : 
                state.currentFieldIndex + 1
            return {
                ...state,
                currentFieldIndex,
                submit
            }
    
        case "CLOSE-BUTTON":
            return initialState
        case "BACK-BUTTON":
                const currentIndex = state.currentFieldIndex - 1
                const anotherSubmit =  state.currentFieldIndex === state.data.length - 1
                return {
                    ...state,
                    currentIndex,
                    anotherSubmit
                }
    }
}
export const RegisterContext = createContext();

export const RegisterProvider = ({children}) =>{
    const value = useReducer(reducer, initialState);
    return <RegisterContext.Provider value={value}>{children}</RegisterContext.Provider>
}