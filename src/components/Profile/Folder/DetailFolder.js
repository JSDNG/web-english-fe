import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getDataFolder,
    getStudySetByFolder,
    deleteFolder,
    deleteSetFromFolder,
    getSetNonFromFolder,
} from "../../../services/apiService";
import ModalAddSet from "./ModalAddSet";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./DetailFolder.scss";
const DetailFolder = (props) => {
    const params = useParams();
    const id = params.id;
    const [detailFolder, setDetailFolder] = useState([]);
    const [arrSet, setArrSet] = useState([]);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const userId = useSelector((state) => state.user.account.user_id);
    //const [cardIndex, SetCardIndex] = useState(0);
    useEffect(() => {
        getData();
        getData1();
        getData2();
    }, []);
    const getData = async () => {
        let res = await getDataFolder(id);
        if (res && res.ec === 200) {
            setDetailFolder([res.dt]);
            //console.log(detailFolder[0]?.StudySets);
        }
    };

    const getData1 = async () => {
        let res = await getStudySetByFolder(id);
        if (res && res.ec === 200) {
            setArrSet(res.dt);
        }
    };
    const hanldeDeleteFolder = async () => {
        let res = await deleteFolder(id);
        if (res && res.ec === 200) {
            toast.success(res.em);
            navigate("/profile/folders");
        }
    };
    const hanldeDeleteSet = async (id) => {
        let res = await deleteSetFromFolder(id);
        if (res && res.ec === 200) {
            toast.success(res.em);
            getData1();
            getData2();
        }
        if (res && res.ec !== 200) {
            toast.error(res.em);
        }
    };
    const getData2 = async () => {
        let res = await getSetNonFromFolder(userId, id);
        if (res && res.ec === 200) {
            setData(res.dt);
        }
    };
    return (
        <div className="detail-folder-main ">
            <div className="detail-folder-header">
                <div className="total-set">
                    <span>{arrSet?.length} học phần </span>
                </div>
                <div className="create-by-user">
                    <span>Tạo bởi </span>
                    <img
                        className="img-by-user-create"
                        src={`data:image/jpeg;base64,${detailFolder[0]?.user?.image}`}
                    />
                    <span className="name-text">{detailFolder[0]?.user?.userName}</span>
                </div>
                <div className="action-folder">
                    <button className="btn btn-light" onClick={() => setShow(true)}>
                        Thêm
                    </button>
                    <ModalAddSet
                        show={show}
                        setShow={setShow}
                        folderId={id}
                        arrSetNonFolder={data}
                        setArrSetNonFolder={setData}
                        getData1={getData1}
                        getData2={getData2}
                    />
                    <button className="btn btn-light">Sửa</button>
                    <button className="btn btn-light" onClick={() => hanldeDeleteFolder()}>
                        Xóa
                    </button>
                </div>
            </div>
            <div className="folder-name">
                <span className="folder-name-text">{detailFolder[0]?.folderName}</span>
            </div>
            <div className="list-set-folder ">
                {arrSet &&
                    arrSet.length > 0 &&
                    arrSet.map((item, index) => {
                        return (
                            <div key={`${index}-set`} className="set-content-folder card col-md-12">
                                <div
                                    className="set-from-folder-custom"
                                    onClick={() => navigate(`/flash-cards/${item?.studySet?.id}`)}
                                >
                                    <div className="set-header-text-folder">
                                        <span className="folder-body-text">{item?.studySet?.studySetName}</span>
                                    </div>
                                    <div className="set-body-content-folder">
                                        <span className="custom-total-cards-set">
                                            {item?.studySet?.cards} thuật ngữ
                                        </span>
                                    </div>
                                    <div className="set-footer-content-folder d-flex gap-2">
                                        <img
                                            className="img-by-user-create"
                                            src={`data:image/jpeg;base64,${item?.studySet?.user?.image}`}
                                        />
                                        <span className="name-text">{item?.studySet?.user?.userName}</span>
                                    </div>
                                </div>
                                <div className="custom-btn-delete">
                                    <button className="btn btn-light" onClick={() => hanldeDeleteSet(item?.id)}>
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                {arrSet && arrSet.length === 0 && <div> Không có học phần</div>}
            </div>
        </div>
    );
};

export default DetailFolder;
