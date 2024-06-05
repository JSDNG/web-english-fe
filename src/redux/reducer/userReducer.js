//import { INCREMENT, DECREMENT } from "../action/counterAction";
import { FETCH_USER_LOGIN_SECCESS, USER_LOGOUT_SECCESS } from "../action/userAction";

const INITIAL_STATE = {
    account: {
        access_token: "",
        refresh_token: "",
        username: "",
        user_id: "",
        image: "",
        role: "",
        email: "",
    },
    isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SECCESS:
            //console.log(action);
            return {
                ...state,
                account: {
                    access_token: action?.payload?.dt?.token,
                    refresh_token: action?.payload?.dt?.refresh_token,
                    username: action?.payload?.dt?.userName,
                    user_id: action?.payload.dt?.userId,
                    image: action?.payload?.dt?.image,
                    role: action?.payload?.dt?.groupName,
                    email: action?.payload?.dt?.email,
                },
                isAuthenticated: true,
            };

        case USER_LOGOUT_SECCESS:
            return {
                ...state,
                account: {
                    access_token: "",
                    refresh_token: "",
                    username: "",
                    user_id: "",
                    image: "",
                    role: "",
                    email: "",
                },
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default userReducer;
