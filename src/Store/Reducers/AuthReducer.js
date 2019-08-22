import AuthAction from '../Actions/AuthActions';
const initialState = {
    isLoading: false,
    isError: false,
    successMessage: "",
    errorMessage: "",
    user: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthAction.AUTHENTICATION:
            return {
                ...state,
                errorMessage:"",
                isError:false,
                isLoading: true
            }

        case AuthAction.AUTHENTICATION_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                successMessage: "Logged In",
                user: action.data
            }
        case AuthAction.AUTHENTICATION_FAILED:
            return {
                ...state,
                errorMessage: "Something Went Wrong",
                successMessage: "",
                isError: true,
                isLoading: false
            }
        default:
            return state
    }
}


export default authReducer;