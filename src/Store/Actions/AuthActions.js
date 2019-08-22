class AuthAction {
    static AUTHENTICATION = "AUTHENTICATION"
    static AUTHENTICATION_SUCCESSFULL = "AUTHENTICATION_SUCCESSFULL"
    static AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED"

    static authentication(data) {
        return {
            type: AuthAction.AUTHENTICATION,
            data
        }
    }
    static authenticationSuccessfull(data) {
        return {
            type: AuthAction.AUTHENTICATION_SUCCESSFULL,
            data
        }
    }
    static authenticationFailed(data) {
        return {
            type: AuthAction.AUTHENTICATION_FAILED,
            data
        }
    }

}


export default AuthAction;