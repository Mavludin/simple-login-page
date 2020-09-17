import { SET_NEWS_DATA, USER_LOGIN, USER_LOGOUT } from "./actions";

const initialNewsData = [
    {
        id: 0,
        title: 'First news',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '10.10.2019',
        approved: true
    },
    {
        id: 1,
        title: 'Second news',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '17.07.2020',
        approved: true
    },
    {
        id: 2,
        title: 'Third news',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '11.08.2020',
        approved: true
    }
]

const initialState = {
    loggedInStatus: localStorage[('isLogged')] === 'true',
    newsData: JSON.parse(localStorage.getItem('newsData')) || initialNewsData
};

export const mainReducer = (currentState = initialState, action) => {

    switch(action.type) {
        case USER_LOGIN:
            localStorage.setItem('isLogged', true);
            return {...currentState, loggedInStatus: true};
        case USER_LOGOUT:
                localStorage.setItem('isLogged', false);
                return {...currentState, loggedInStatus: false};
        case SET_NEWS_DATA:
                localStorage.setItem('newsData', JSON.stringify(action.payload))
                return {...currentState, newsData: action.payload};
        default:
            return {...currentState};
    }
}