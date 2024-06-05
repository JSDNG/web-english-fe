import axios from "../utils/axiosCustomize";
const postCreacteNewUser = (email, password, username, role, image) => {
    //call API
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.post("/api/participant", data);
};

const getAllUsers = () => {
    return axios.get("/api/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
    //call API
    const data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    return axios.put("/api/participant", data);
};
const deleteUser = (id) => {
    return axios.delete("/api/participant", { data: { id } });
};
const getUserWithPage = (page, limit) => {
    return axios.get(`/api/participant?page=${page}&limit=${limit}`);
};
const postLogin = (data) => {
    return axios.post("/api/account/login", { ...data });
};
const postRegister = (data) => {
    return axios.post("/api/account", { ...data });
};
const logout = (email, refresh_token) => {
    return axios.post("/api/logout", { email, refresh_token });
};
const putChangePassWord = (data) => {
    return axios.put("/api/account", { ...data });
};
const putChangeUser = (data) => {
    return axios.put("/api/user", { ...data });
};
const getQuizByUser = () => {
    return axios.get("/api/quiz-by-participant");
};
const getDataQuiz = (id) => {
    return axios.get(`/api/questions-by-quiz?quizId=${id}`);
};

//Set
const getAllSet = (id) => {
    return axios.get(`/api/study-set/user/${id}`);
};
const getSetWithPage = (id, page, limit) => {
    return axios.get(`/api/study-set/user/${id}/?page=${page}&limit=${limit}`);
};
const getDataSet = (id) => {
    return axios.get(`/api/study-set/${id}`);
};
const postCreateNewSet = (data) => {
    console.log({ ...data });
    return axios.post(`/api/study-set`, { ...data });
};
const putUpdateSet = (data) => {
    return axios.put(`/api/study-set`, { ...data });
};
//Folder
const getAllFolder = () => {
    return axios.get("/api/folder");
};
const getDataFolder = (id) => {
    return axios.get(`/api/folder/${id}`);
};
const getStudySetByFolder = (id) => {
    return axios.get(`/api/study-set/folder/${id}`);
};
const getFolderWithPage = (page, limit) => {
    return axios.get(`/api/folder?page=${page}&limit=${limit}`);
};
const postCreateNewFolder = (data) => {
    return axios.post(`/api/folder`, { ...data });
};
//Class
const getAllClass = (id) => {
    return axios.get(`/api/class/user-joined/${id}`);
};
const getClassWithPage = (id, page, limit) => {
    return axios.get(`/api/class/user-joined/${id}/?page=${page}&limit=${limit}`);
};
const getDataClass = (id) => {
    return axios.get(`/api/folder/class/${id}`);
};
const getAllMember = (id) => {
    return axios.get(`/api/member/class/${id}`);
};
const postCreateNewClass = (data) => {
    return axios.post(`/api/class`, { ...data });
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
    putChangePassWord,
    putChangeUser,
    getQuizByUser,
    getDataQuiz,
    getAllSet,
    getSetWithPage,
    getDataSet,
    postCreateNewSet,
    putUpdateSet,
    getAllFolder,
    getDataFolder,
    getStudySetByFolder,
    getFolderWithPage,
    postCreateNewFolder,
    getAllClass,
    getClassWithPage,
    getDataClass,
    getAllMember,
    postCreateNewClass,
};
