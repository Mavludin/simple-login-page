  
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogIn = () => {
    return {
        type: USER_LOGIN
    }
}

export const userLogOut = () => {
    return {
        type: USER_LOGOUT
    }
}