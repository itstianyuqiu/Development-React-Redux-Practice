import { React , useReducer} from "react";

const initState = {
    backgroundColor:"blue"
}
//Q2 switch function, action.type means? "" meannings
const reducer = (state , action)=>{ 
    switch (action.type) {
        case "dark":
            return{
                backgroundColor:"blue"
            }
        case "light":
            
    
        default:
            return{
                backgroundColor:"red"
            }
    }
 }

const PracticeReducer = ()=>{ 
//Q3 init? how to understand state,dispatch?
    //const [state, dispatch] = useReducer(reducer, initialState, init)
    const [state, dispatch] = useReducer(reducer, initState)

    const handleOnLightClick = ()=>{ 
        dispatch({type:"light"})
     }

     const handleOnDarkClick = ()=>{ 
         dispatch({type:"dark"})
      }
    return(
        <div>
            <div style = {state}>TestTestTestTestTestTest</div>
            <button onClick = {handleOnLightClick}>Light</button>
            <button onClick = {handleOnDarkClick}>Dark</button>

        </div>
    )
 }

 export default PracticeReducer