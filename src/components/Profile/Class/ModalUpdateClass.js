import { useState } from "react";
import Button from "react-bootstrap/Button";
import { putUpdateClass } from "../../../services/apiService";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
const ModalUpdateClass = (props) => {
    const { className, setClassName, showUpdateClass, setShowUpdateClass, id } = props;
    const handleClose = () => setShowUpdateClass(false);

    const [classNameNew, setClassNameNew] = useState("");

    const handleUpdateClass = async () => {
        if (!classNameNew) {
            toast.error("Vui lòng nhập tên lớp mới!");
            return;
        }

        let description = "";
        let className = classNameNew;
        let res = await putUpdateClass({ id, className, description });
        console.log(res);
        if (res && res.ec === 200) {
            toast.success(res.em);
            setShowUpdateClass(false);
            setClassName(classNameNew);
            setClassNameNew("");
        }
        if (res && res.ec !== 200) {
            toast.error(res.em);
        }

        //console.log(title, desc);
    };
    return (
        <>
            <Modal
                show={showUpdateClass}
                onHide={handleClose}
                animation={false}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa lớp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Tên lớp hiện tại</label>
                            <input type="text" className="form-control" value={className} />
                            <label className="form-label"></label>
                            <label className="form-label">Nhập tên lớp mới</label>
                            <input
                                type="text"
                                className="form-control"
                                value={classNameNew}
                                onChange={(event) => setClassNameNew(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleUpdateClass()}>
                        Hoàn tất
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalUpdateClass;
