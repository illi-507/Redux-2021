import {BUY_CAKE} from './cakeTypes';


const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            console.log("into buy cake");
            return {
                ...state, 
                numOfCakes:state.numOfCakes -1
            }
        default: return state
    }     

}

export default cakeReducer;