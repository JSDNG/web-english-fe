import axios from "../utils/axiosCustomize";
const postCreacteNewUser = (email, password, username, role, image) => {
    //call API
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.post("/api/v1/participant", data);
};

const getAllUsers = () => {
    return axios.get("/api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
    //call API
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put("/api/v1/participant", data);
};
const deleteUser = (id) => {
    return axios.delete("/api/v1/participant", { data: { id } });
};
const getUserWithPage = (page, limit) => {
    return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};
const postLogin = (email, password) => {
    return axios.post("/api/v1/login", { email, password });
};
const postRegister = (email, password, username, groupId) => {
    return axios.post("/api/v1/register", { email, password, username, groupId });
};
const logout = (email, refresh_token) => {
    return axios.post("/api/v1/logout", { email, refresh_token });
};
const getQuizByUser = () => {
    return axios.get("/api/v1/quiz-by-participant");
};
const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

//Set
const getAllSet = () => {
    return axios.get("/api/v1/studyset");
};
const getDataSet = (id) => {
    return axios.get(`/api/v1/studyset/${id}`);
};
const postCreateNewSet = (data) => {
    console.log({ ...data });
    return axios.post(`/api/v1/studyset`, { ...data });
};

//Folder
const getAllFolder = () => {
    return axios.get("/api/v1/folder");
};
const getDataFolder = (id) => {
    return axios.get(`/api/v1/folder/${id}`);
};

//Class
const getAllClass = () => {
    return axios.get("/api/v1/class");
};
const getDataClass = (id) => {
    return axios.get(`/api/v1/class/${id}`);
};
export {
    postCreacteNewUser,
    getAllUsers,
    putUpdateUser,
    deleteUser,
    getUserWithPage,
    postLogin,
    postRegister,
    logout,
    getQuizByUser,
    getDataQuiz,
    getAllSet,
    getDataSet,
    postCreateNewSet,
    getAllFolder,
    getDataFolder,
    getAllClass,
    getDataClass,
};
