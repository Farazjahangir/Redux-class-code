import { createStore } from 'redux'
import { combineReducers } from 'redux';

/////////////Reducer///////////
function msgReducer(state = "", action) {
    switch (action.type) {
        case "LOGIN_SUCCESSFULL":
            return "User Logged In"

        default:
            return state
    }
}


function authReducer(state = {
    user: {},
    isLoading: false,
    errorMessage: "",
    successMessage: ""
}, action) {
    switch (action.type) {
        case "LOGIN_SUCCESSFULL":
            return {
                ...state,
                user: {
                    name: "IRFAN ALI",
                    isLoading: false
                }
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    message: msgReducer,
    authentication: authReducer
})

const initialState = {

}

const store = createStore(rootReducer, initialState);




export default store;