import React, {createContext, useContext, useReducer} from 'react'

// Prepating the data layer
export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)