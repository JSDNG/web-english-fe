import { useState } from "react";
import Button from "react-bootstrap/Button";
import { putChangePassWord } from "../../services/apiService";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/userAction";
import { NavLink, useNavigate } from "react-router-dom";
const ModalChangePassWord = (props) => {
    const { show, setShow } = props;
    const handleClose = () => setShow(false);
    const id = useSelector((state) => state.user.account.user_id);
    const email = useSelector((state) => state.user.account.email);
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChangePassWord = async () => {
        if (!oldpassword) {
            toast.error("Vui lòng nhập mật khẩu cũ");
            return;
        }
        if (!newpassword) {
            toast.error("Vui lòng nhập mật khẩu mới");
            return;
        }
        let res = await putChangePassWord({ id, email, oldpassword, newpassword });
        if (res && res.ec === 200) {
            toast.success(res.em);
            setShow(false);
            setStatus(true);
        }
        if (res && res.ec !== 200) {
            toast.error(res.em);
        }
    };
    const handleChangeAccount = (status) => {
        if (status === 0) {
            setStatus(false);
        }
        if (status === 1) {
            dispatch(doLogout());
            toast.success("Logout successful!");
            navigate("/");
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
                    <Modal.Title>Đổi mật khẩu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Mật khẩu cũ</label>
                            <input
                                type="text"
                                className="form-control"
                                value={oldpassword}
                                onChange={(event) => setOldpassword(event.target.value)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mật khẩu mới</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newpassword}
                                onChange={(event) => setNewpassword(event.target.value)}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleChangePassWord()}>
                        Hoàn tất
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={status} animation={false} size="sm" backdrop="static" className="modal-add-user">
                <Modal.Header closeButton>
                    <Modal.Title>Trạng thái tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex gap-5">
                        <Button variant="primary" onClick={() => handleChangeAccount(0)}>
                            Duy trì đăng nhập
                        </Button>
                        <Button variant="primary" onClick={() => handleChangeAccount(1)}>
                            Đăng xuất
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalChangePassWord;
