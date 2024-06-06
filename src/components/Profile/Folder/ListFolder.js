import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllFolder } from "../../../services/apiService";
import { useDispatch, useSelector } from "react-redux";
import "./ListFolder.scss";
const ListFolder = (props) => {
    const [arrFolder, setArrFolder] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);
    const id = useSelector((state) => state.user.account.user_id);
    const getData = async () => {
        let res = await getAllFolder(id);
        if (res && res.ec === 200) {
            setArrFolder(res.dt.folders);
        }
    };
    return (
        <>
            <div className="folder-header ">
                <button className="btn btn-light">Đã tạo</button>
            </div>
            <div className="list-folder ">
                {arrFolder &&
                    arrFolder.length > 0 &&
                    arrFolder.map((item, index) => {
                        return (
                            <div
                                key={`${index}-folder`}
                                className="folder-content card"
                                onClick={() => navigate(`/folders/${item.id}`)}
                            >
                                <div className="folder-header-text">
                                    <span>{item?.totalStudySets} học phần</span>
                                </div>
                                <div className="folder-body-content">
                                    <p className="folder-body-text">{item.folderName}</p>
                                </div>
                            </div>
                        );
                    })}
                {arrFolder && arrFolder.length === 0 && <div> No Folder</div>}
            </div>
        </>
    );
};

export default ListFolder;
