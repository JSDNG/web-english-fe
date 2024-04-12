import App from "./App";
import { Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";

import Profile from "./components/Profile/Profile";
import StudySet from "./components/Profile/StudySet/StudySet";
import Folder from "./components/Profile/Folder/Folder";
import Class from "./components/Profile/Class/Class";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage1 from "./components/Home/HomePage1";

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="user" element={<User />} />
                    <Route path="home" element={<HomePage1 />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route index element={<StudySet />} />
                        <Route path="folders" element={<Folder />} />
                        <Route path="Classes" element={<Class />} />
                    </Route>
                </Route>
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Layout;
