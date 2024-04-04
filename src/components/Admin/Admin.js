import Sidebar from "./Sidebar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <Sidebar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setcollapsed(!collapsed)} />
                content
            </div>
        </div>
    );
};

export default Admin;
