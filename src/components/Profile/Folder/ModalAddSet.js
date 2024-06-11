import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { getSetNonFromFolder, postFolderDetail } from "../../../services/apiService";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ModalAddSet = (props) => {
    const { show, setShow, folderId, arrSetNonFolder } = props;
    const handleClose = () => setShow(false);
    const navigate = useNavigate();

    const handleAddSet = async (studySetId) => {
        let res = await postFolderDetail({ folderId, studySetId });
        if (res && res.ec === 201) {
            handleClose();
            await props.getData1();
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
                        {arrSetNonFolder &&
                            arrSetNonFolder.length > 0 &&
                            arrSetNonFolder.map((item, index) => {
                                return (
                                    <div
                                        key={`${index}-set`}
                                        className="set-content-folder card p-2 px-2 mb-3"
                                        //onClick={() => navigate(`/flash-cards/${item?.id}`)}
                                    >
                                        <div className="set-body-content-folder d-flex align-items-center gap-3">
                                            <span className="custom-total-cards-set">{item?.studySetName}</span>
                                            <Button
                                                variant="primary"
                                                className="btn btn-light ml-auto"
                                                onClick={() => handleAddSet(item?.id)}
                                            >
                                                Thêm
                                            </Button>
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

export default ModalAddSet;
