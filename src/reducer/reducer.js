const initialState = {
    username: '',
    password: "",
    error: ""
};

export default function userstate(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload }
        case 'SET_PASSWORD':
            return { ...state, password: action.payload }
        case 'SET_ERROR':
            return { ...state, error: action.payload }

        default:
            return state;
    }
}




// function reducer(state = 0, action) {
//    switch (action.type) {
//        case 'INC' :
//            return state + 1


//            default :
//            return state  ;
//    }
   
// }

// let state = reducer(undefined, {});
// state = reducer(state, {type: 'INC'});
// console.log(state);

// state = reducer(state, {type: 'INC'});
// console.log(state);
