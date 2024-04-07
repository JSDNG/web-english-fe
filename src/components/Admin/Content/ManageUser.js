import ModalCreactUser from "./ModalCreactUser";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
const ManageUser = (props) => {
    const [showModalCreactUser, setShowModalCreactUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };
    return (
        <div className="manage-user-container">
            <div className="title">manage</div>
            <div className="user-content">
                <div className="btn-add-user">
                    <button className="btn btn-primary" onClick={() => setShowModalCreactUser(true)}>
                        Add user
                    </button>
                </div>
                <div className="table-user">
                    <TableUser listUser={listUser} handleClickBtnUpdate={handleClickBtnUpdate} />
                </div>
                <ModalCreactUser
                    show={showModalCreactUser}
                    setShow={setShowModalCreactUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    setDataUpdate={setDataUpdate}
                />
            </div>
        </div>
    );
};

export default ManageUser;
