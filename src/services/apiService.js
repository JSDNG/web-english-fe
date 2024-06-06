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
const deleteSet = (id) => {
    return axios.delete(`/api/study-set/${id}`);
};
const postCreateNewSet = (data) => {
    console.log({ ...data });
    return axios.post(`/api/study-set`, { ...data });
};
const putUpdateSet = (data) => {
    return axios.put(`/api/study-set`, { ...data });
};
const deleteSetFromFolder = (id) => {
    return axios.delete(`/api/folder-detail/${id}`);
};
//Folder
const getSetNonFromFolder = (userId, folderId) => {
    return axios.get(`/api/study-set/user-nfolder?userId=${userId}&folderId=${folderId}`);
};
const getAllFolder = (id) => {
    return axios.get(`/api/folder/user/${id}`);
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
const deleteFolder = (id) => {
    return axios.delete(`/api/folder/${id}`);
};
//folder-detail
const postFolderDetail = (data) => {
    return axios.post(`/api/folder-detail`, { ...data });
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
const deleteClass = (id) => {
    return axios.delete(`/api/class/${id}`);
};
const getFolderNonFromClass = (userId) => {
    return axios.get(`/api/folder/user/${userId}/non-class`);
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
    deleteSet,
    postCreateNewSet,
    putUpdateSet,
    deleteSetFromFolder,
    getSetNonFromFolder,
    getAllFolder,
    getDataFolder,
    getStudySetByFolder,
    getFolderWithPage,
    postCreateNewFolder,
    deleteFolder,
    postFolderDetail,
    getAllClass,
    getClassWithPage,
    getDataClass,
    getAllMember,
    postCreateNewClass,
    deleteClass,
    getFolderNonFromClass,
};
