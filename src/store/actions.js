  
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SET_NEWS_DATA = 'SET_NEWS_DATA';

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

export const setNewsData = (data) => {
    return {
        type: SET_NEWS_DATA,
        payload: data
    }
}