import App from "./App";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import DashBoard from "./components/Admin/Content/DashBoard";
import ManageUser from "./components/Admin/Content/ManageUser";

import Profile from "./components/Profile/Profile";
import ManageClass from "./components/Profile/Class/ManageClass";
import ListSet from "./components/Profile/Set/ListSet";
import DetailSet from "./components/Profile/Set/DetailSet";
import ManageFolder from "./components/Profile/Folder/ManageFolder";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage1 from "./components/Home/HomePage1";
import CreateCard from "./components/Profile/Set/CreateCard";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="user" element={<ListQuiz />} />
                    <Route path="/flash-cards/:id" element={<DetailSet />} />
                    <Route path="home" element={<HomePage1 />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route path="sets" element={<ListSet />} />
                        <Route path="folders" element={<ManageFolder />} />
                        <Route path="Classes" element={<ManageClass />} />
                    </Route>
                    <Route path="/create-card" element={<CreateCard />} />
                </Route>

                <Route path="/quiz/:id" element={<DetailQuiz />} />
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="*" element={<NotFound />} /> */}
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
