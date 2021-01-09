//setup data layer
//we need this to track basket
import React ,{createContext, useContext, useReducer} from 'react';

//this is the data layer
export const StateContext = createContext();

//BUILD  A PROVIDER 
export const  StateProvider = ({reducer, initialState, childern}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {childern}
    </StateContext.Provider>

);

export const useStateValue = () => useContext(StateContext);



