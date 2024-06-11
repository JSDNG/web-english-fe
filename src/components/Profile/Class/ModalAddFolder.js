import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFolderNonFromClass, putAddFolderInClass } from "../../../services/apiService";
import { useDispatch, useSelector } from "react-redux";
const ModalAddFolder = (props) => {
    const { showAddFolder, setShowAddFolder, classId } = props;
    const handleClose = () => setShowAddFolder(false);
    const [infoFolder, setInfoFolder] = useState("");
    const [arrFolder, setArrFolder] = useState([]);
    const navigate = useNavigate();

    const userId = useSelector((state) => state.user.account.user_id);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let res = await getFolderNonFromClass(userId);
        if (res && res.ec === 200) {
            setArrFolder(res.dt);
        }
    };

    const handleAddFolder = async (id, folderName) => {
        let res = await putAddFolderInClass({ id, folderName, classId });
        handleClose();
        await props.getData();
    };
    return (
        <>
            <Modal
                show={showAddFolder}
                onHide={handleClose}
                animation={false}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm thư mục</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            {/* <Button variant="primary" onClick={() => handleAddFolderNew()}>
                                Tạo thư mục mới
                            </Button> */}
                            {arrFolder &&
                                arrFolder.length > 0 &&
                                arrFolder.map((item, index) => {
                                    return (
                                        <div
                                            key={`${index}-folder`}
                                            className="folder-content card p-2 px-2 mb-3"
                                            //onClick={() => navigate(`/folders/${item.id}`)}
                                        >
                                            <div className="folder-body-content d-flex align-items-center">
                                                <span> {item?.folderName}</span>
                                                <Button
                                                    variant="primary"
                                                    className="btn btn-light"
                                                    onClick={() => handleAddFolder(item?.id, item?.folderName)}
                                                >
                                                    Thêm
                                                </Button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalAddFolder;
