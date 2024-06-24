import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import { getListUser, postAddMember } from "../../../services/apiService";
const ModalAddMember = (props) => {
    const { showMember, setShowMember, id } = props;
    const handleClose = () => setShowMember(false);

    const [infoMember, setInfoMember] = useState("");
    const [data, setData] = useState([]);
    const handleAddMember = async () => {
        console.log(infoMember);
        let res = await getListUser(infoMember);
        // if(res&& res.ec === 200){
        // setData(res.)
        // }

        console.log(res);
        //setShowMember(false);
    };
    return (
        <>
            <Modal
                show={showMember}
                onHide={handleClose}
                animation={false}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Mời thành viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">
                                Để mời thành viên tham gia lớp học này, hãy nhập tên người dùng Quizlet của họ bên dưới
                                (phân tách bằng dấu phẩy hoặc ngắt dòng).
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                value={infoMember}
                                onChange={(event) => setInfoMember(event.target.value)}
                                placeholder="Nhập tên người dùng "
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleAddMember()}>
                        Hoàn tất
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalAddMember;
