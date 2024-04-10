import axios from "../utils/axiosCustomize";
const postCreacteNewUser = (email, password, username, role, image) => {
    //call API
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
    return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
    //call API
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put("api/v1/participant", data);
};
const deleteUser = (id) => {
    return axios.delete("api/v1/participant", { data: { id } });
};
const getUserWithPage = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const postLogin = (email, password) => {
    return axios.post("api/v1/login", { email, password });
};
const postRegister = (email, username, password) => {
    return axios.post("api/v1/register", { email, username, password });
};
export { postCreacteNewUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPage, postLogin, postRegister };
