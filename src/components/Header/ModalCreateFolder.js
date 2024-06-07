import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { postCreateNewFolder } from "../../services/apiService";
import { toast } from "react-toastify";
const ModalCreateFolder = (props) => {
    const { showFolder, setShowFolder } = props;
    const handleClose = () => setShowFolder(false);

    const [folderName, setFolderName] = useState("");

    const userId = useSelector((state) => state.user.account.user_id);
    const handleCreateFolder = async () => {
        if (!folderName) {
            toast.error("Tên thư mục trống");
            return;
        }
        let classId = 0;
        let res = await postCreateNewFolder({ folderName, userId, classId });
        if (res && res.ec === 201) {
            toast.success("Created folder successful!");
            setFolderName("");
            setShowFolder(false);
        }
        if (res && res.ec !== 201) {
            toast.error(res.em);
        }
    };
    return (
        <>
            <Modal
                show={showFolder}
                onHide={handleClose}
                animation={false}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo thư mục mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-6">
                        <div className="col-md-16">
                            <label className="form-label">Tiêu đề</label>
                            <input
                                type="text"
                                className="form-control"
                                value={folderName}
                                onChange={(event) => setFolderName(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleCreateFolder()}>
                        Tạo thư mục
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateFolder;
