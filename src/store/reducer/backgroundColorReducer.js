import { LIGHT , DARK } from "../action/actionType";

const initState = {
    backgroundColor : "blue"
}

const BackgroundReducer = (state = initState , action)=>{ 
    switch (action.type) {
        case LIGHT:
            
            return{
                backgroundColor:"blue"
            }
    case DARK:
        default:
            return{
                backgroundColor:"red"
            }
    }
 }

 export default BackgroundReducer