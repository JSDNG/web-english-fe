import { useState, useEffect } from "react";
import ModalAddMember from "./ModalAddMember";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalAddFolder from "./ModalAddFolder";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import HeaderClass from "./HeaderClass";
import { deleteClass } from "../../../services/apiService";
import { Outlet } from "react-router-dom";
import "./ManageDetailClass.scss";
import { getDataClass, putAddFolderInClass } from "../../../services/apiService";
import ModalUpdateClass from "./ModalUpdateClass";
import { toast } from "react-toastify";
const ManageDetailClass = (props) => {
    const [showMember, setShowMember] = useState(false);
    const [showAddFolder, setShowAddFolder] = useState(false);
    const [showUpdateClass, setShowUpdateClass] = useState(false);
    const location = useLocation();
    const [className, setClassName] = useState(location?.state?.data);
    const [folders, setFolders] = useState([]);
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, [id]);
    const getData = async () => {
        let res = await getDataClass(id);
        console.log(res);
        if (res && res.ec === 200) {
            setFolders(res.dt.folders);
        }
    };
    const hanldeDeleteClass = async () => {
        let res = await deleteClass(id);
        if (res && res.ec === 200) {
            toast.success(res.em);
            navigate("/profile/classes");
        }
    };

    return (
        <div className="detail-class-main">
            <div className="detail-class-header">
                <div className="class-name">
                    <span className="class-name-text"> {className} </span>
                </div>
                <div className="action-class">
                    <div>
                        <button className="btn btn-light" onClick={() => setShowAddFolder(true)}>
                            Thêm thư mục
                        </button>
                        <ModalAddFolder
                            showAddFolder={showAddFolder}
                            setShowAddFolder={setShowAddFolder}
                            classId={id}
                            folders={folders}
                            setFolders={setFolders}
                            getData={getData}
                        />
                    </div>
                    <div>
                        <button className="btn btn-light" onClick={() => setShowMember(true)}>
                            Thêm thành viên
                        </button>
                        <ModalAddMember showMember={showMember} setShowMember={setShowMember} id={id} />
                    </div>
                    <div className="dropdown-class-custom">
                        <button>
                            <NavDropdown title="Cài đặt" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => setShowUpdateClass(true)}>Sửa</NavDropdown.Item>
                                <ModalUpdateClass
                                    className={className}
                                    setClassName={setClassName}
                                    showUpdateClass={showUpdateClass}
                                    setShowUpdateClass={setShowUpdateClass}
                                    id={id}
                                />
                                <NavDropdown.Item onClick={() => hanldeDeleteClass()}>Xóa</NavDropdown.Item>
                            </NavDropdown>
                        </button>
                    </div>
                </div>

                <div className="header-class-custom">
                    <HeaderClass />
                    <hr />
                </div>
                <div className="detail-class-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ManageDetailClass;
