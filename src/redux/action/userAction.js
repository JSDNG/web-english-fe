export const FETCH_USER_LOGIN_SECCESS = "FETCH_USER_LOGIN_SECCESS";
export const doLogin = (data) => {
    return {
        type: FETCH_USER_LOGIN_SECCESS,
        payload: data,
    };
};
