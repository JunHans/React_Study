import { configureStore , createSlice } from "@reduxjs/toolkit"
import { data } from './data.js'

// { name : 'state Name', initialState : 'state Value'} 

let user = createSlice({
    name : 'user',
    initialState : 'junhan',
    reducers:{
        changeName(state){
            console.log(state);
            return 'Juns '+state
        }
    }
})

export let {changeName} = user.actions  //user.actions : state 변경함수

let people = createSlice({
    name : 'people',
    initialState : 200
})

let cart = createSlice({
    name : 'cart',
    initialState : [],
    reducers:
    {
        changeCart(state, action){ //action은 넘어온 데이터 // action.payload는 파라미터같은 개념
            console.log(state);
            console.log(action);
            let clothes = [...state];
            clothes.push(data[action.payload])
            return clothes;
        },
        changeCount(state, action){
            if(state[action.payload[0]].count > 0){
                state[action.payload[0]].count += action.payload[1];
            }
            
        }
    }
    
})
export let {changeCart, changeCount} = cart.actions;


// let stock = createSlice({ //    [stock, setStock] = useState([7,13,20]);
//     name : 'stock',
//     initialState : [7,13,20],    // stock = [7,13,20]
//     reducers : {
//         changeStock(state, action){
//             console.log(action)
//             let copy = [...state]
//             let arr =[];
//             if(action.payload == 'up'){
//                 copy.map((item)=>{item++; arr.push(item)})
//                 return arr;
//             }else{
//                 copy.map((item)=>{item--; arr.push(item)})
//                 return arr;
//             }
//         }
//     }
// })
// export let {changeStock} = stock.actions;

export default configureStore({
    reducer:{
        //상태변수 등록하는 부분
        user : user.reducer,  //  .reducer 붙여야 함
        people : people.reducer,
        cart : cart.reducer
    }
})