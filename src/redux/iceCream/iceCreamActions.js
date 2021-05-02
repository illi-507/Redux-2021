import {POP_ICECREAM,BUY_ICECREAM} from './iceCreamTypes';

export const buyIceCream = ()=>{
    return{
        type: BUY_ICECREAM
    }
}

export const popIceCream = ()=>{
    return{
        type: POP_ICECREAM
    }
}

