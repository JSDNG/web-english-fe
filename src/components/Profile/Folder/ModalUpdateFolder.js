import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { getSetNonFromFolder, postFolderDetail } from "../../../services/apiService";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ModalUpdateFolder = (props) => {
    const { show, setShow, folder } = props;
    const handleClose = () => setShow(false);
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);
    const [data, setData] = useState([]);
    const userId = useSelector((state) => state.user.account.user_id);

    const getData = async () => {
        let res = await getSetNonFromFolder(userId, folderId);
        if (res && res.ec === 200) {
            setData(res.dt);
        }
    };
    const handleAddSet = async (id) => {
        let studySetId = id;
        let res = await postFolderDetail({ folderId, studySetId });
        if (res && res.ec === 201) {
            setShow(false);
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
                    <Modal.Title className="pt-3">Thêm học phần</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    navigate("/create-set", { state: { data: folderId } });
                                }}
                            >
                                Tạo học phần mới
                            </button>
                        </div>
                        {data &&
                            data.length > 0 &&
                            data.map((item, index) => {
                                return (
                                    <div
                                        key={`${index}-set`}
                                        className="set-content-folder card p-2 px-2"
                                        //onClick={() => navigate(`/flash-cards/${item?.id}`)}
                                    >
                                        <div className="set-body-content-folder d-flex align-items-center">
                                            <span className="custom-total-cards-set">{item?.studySetName}</span>
                                            <button
                                                className="btn btn-light mr-2"
                                                onClick={() => handleAddSet(item?.id)}
                                            >
                                                Thêm
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ModalUpdateFolder;
