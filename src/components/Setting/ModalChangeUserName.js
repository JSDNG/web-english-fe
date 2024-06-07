import { useState } from "react";
import Button from "react-bootstrap/Button";
import { putChangeUser } from "../../services/apiService";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const ModalChangeUserName = (props) => {
    const { show, setShow, usernameold, setUsernameold } = props;
    const handleClose = () => setShow(false);
    const id = useSelector((state) => state.user.account.user_id);
    const [username, setUsername] = useState("");
    const handleChangeUserName = async () => {
        if (!username) {
            toast.error("Vui lòng nhập tên mới");
            return;
        }
        let image = "";
        let res = await putChangeUser({ id, username, image });
        if (res && res.ec === 200) {
            toast.success(res.em);
            setUsernameold(username);
            setShow(false);
        }
        if (res && res.ec !== 200) {
            toast.error(res.em);
        }
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Đổi tên người dùng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Tên hiện tại</label>
                            <input type="text" className="form-control" value={usernameold} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Tên mới</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleChangeUserName()}>
                        Hoàn tất
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalChangeUserName;
