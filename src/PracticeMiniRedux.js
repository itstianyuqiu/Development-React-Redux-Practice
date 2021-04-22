import { createContext, React, useContext , useReducer} from "react";

const initState = {}

const StateContext = createContext(initState)
//Q5: light=>blue
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "light":

            return {
                backgroundColor: "blue"
            }
        case "dark":

        default:
            return {
                backgroundColor: "red"
            }
    }

}

const A = () => {

    const { state , dispatch} = useContext(StateContext)

    const handleClick = () => {
        if (state.backgroundColor && state.backgroundColor === "blue") {
            dispatch({ type: "dark" })
        }
        else {
            dispatch({ type: "light" })
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

const B = () => {
    const {state} = useContext(StateContext)
    return (
        <div style = {state}>
TestTestTestTestTestTest
        </div>
    )
}

const PracticeMiniRedux = () => {
//Q4 always like this? =/:
    const [allState, dispatchAllState] = useReducer(reducer, initState)
    return (
        <div>
            
            <StateContext.Provider value={{
state : allState,
dispatch : dispatchAllState
            }
                
            }>
                <A />
                <B />
            </StateContext.Provider>

        </div>
    )
}

export default PracticeMiniRedux