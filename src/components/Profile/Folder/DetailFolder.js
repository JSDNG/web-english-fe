import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDataFolder, getStudySetByFolder } from "../../../services/apiService";
import ModalAddSet from "./ModalAddSet";
import "./DetailFolder.scss";
const DetailFolder = (props) => {
    const params = useParams();
    const id = params.id;
    const [detailFolder, setDetailFolder] = useState([]);
    const [arrSet, setArrSet] = useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    //const [cardIndex, SetCardIndex] = useState(0);
    useEffect(() => {
        getData();
        getData1();
    }, [id]);
    const getData = async () => {
        let res = await getDataFolder(id);
        if (res && res.ec === 200) {
            setDetailFolder([res.dt]);
            //console.log(detailFolder[0]?.StudySets);
        }
    };

    const getData1 = async () => {
        let data = await getStudySetByFolder(id);
        console.log(data);
        if (data && data.ec === 200) {
            setArrSet(data.dt.studySets);
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
                    <ModalAddSet show={show} setShow={setShow} />
                    <button className="btn btn-light">Sửa</button>
                    <button className="btn btn-light">Xóa</button>
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
                            <div
                                key={`${index}-set`}
                                className="set-content-folder card col-md-6"
                                onClick={() => navigate(`/flash-cards/${item.id}`)}
                            >
                                <div className="set-header-text-folder">
                                    <span className="folder-body-text">{item.studySetName}</span>
                                </div>
                                <div className="set-body-content-folder">
                                    <span className="custom-total-cards-set">{item.totalCards} thuật ngữ</span>
                                </div>
                                <div className="set-footer-content-folder">
                                    <img
                                        className="img-by-user-create"
                                        src={`data:image/jpeg;base64,${item?.user?.image}`}
                                    />
                                    <span className="name-text">{item?.user?.userName}</span>
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
