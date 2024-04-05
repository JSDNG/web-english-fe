import ModalCreactUser from "./ModalCreactUser";
import "./ManageUser.scss";
import { useState } from "react";
const ManageUser = (props) => {
    const [showModalCreactUser, setShowModalCreactUser] = useState(false);
    return (
        <div className="manage-user-container">
            <div className="title">manage</div>
            <div className="user-content">
                <div className="btn-add-user">
                    <button className="btn btn-primary" onClick={() => setShowModalCreactUser(true)}>
                        Add user
                    </button>
                </div>
                <div className="table-user"></div>
                <ModalCreactUser show={showModalCreactUser} setShow={setShowModalCreactUser} />
            </div>
        </div>
    );
};

export default ManageUser;
