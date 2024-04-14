import App from "./App";
import { Route, Routes } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";

import Profile from "./components/Profile/Profile";
import ManageClass from "./components/Profile/Class/ManageClass";
import ListStudySet from "./components/Profile/StudySet/ListStudySet";
import ManageFolder from "./components/Profile/Folder/ManageFolder";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage1 from "./components/Home/HomePage1";
import CreateCard from "./components/Profile/StudySet/CreateCard";
import ListQuiz from "./components/User/ListQuiz";

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="user" element={<ListQuiz />} />
                    <Route path="home" element={<HomePage1 />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route index element={<ListStudySet />} />
                        <Route path="folders" element={<ManageFolder />} />
                        <Route path="Classes" element={<ManageClass />} />
                    </Route>
                    <Route path="/create-card" element={<CreateCard />} />
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
