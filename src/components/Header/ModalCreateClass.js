import { useState } from "react";
import Button from "react-bootstrap/Button";
import { postCreateNewClass } from "../../services/apiService";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const ModalCreateClass = (props) => {
    const { showClass, setShowClass } = props;
    const handleClose = () => setShowClass(false);
    const userId = useSelector((state) => state.user.account.user_id);
    const [className, setClassName] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateClass = async () => {
        if (!className) {
            toast.error("Tên lớp trống");
            return;
        }
        if (!description) {
            toast.error("Tên mô tả trống");
            return;
        }
        let res = await postCreateNewClass({ className, description, userId });
        if (res && res.ec === 201) {
            toast.success(res.em);
            setShowClass(false);
        }
        if (res && res.ec !== 201) {
            toast.error(res.em);
        }
    };
    return (
        <>
            <Modal
                show={showClass}
                onHide={handleClose}
                animation={false}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Tạo lớp mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Tiêu đề</label>
                            <input
                                type="text"
                                className="form-control"
                                value={className}
                                onChange={(event) => setClassName(event.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mô tả</label>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleCreateClass()}>
                        Tạo lớp
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCreateClass;
