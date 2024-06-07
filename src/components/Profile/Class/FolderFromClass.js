import { useState, useEffect } from "react";
import ModalAddMember from "./ModalAddMember";
import { useParams, useNavigate } from "react-router-dom";

import { getDataClass } from "../../../services/apiService";
import "./FolderFromClass.scss";
const FolderFromClass = (props) => {
    const [show, folderShow] = useState(false);
    const params = useParams();
    const id = params.id;
    const [folders, setFolders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, [id]);
    const getData = async () => {
        let res = await getDataClass(id);
        if (res && res.ec === 200) {
            setFolders(res.dt.folders);
            //console.log(folders[0]?.Studyfolders);
        }
    };

    return (
        <>
            <div className="list-folder-class ">
                {folders &&
                    folders.length > 0 &&
                    folders.map((item, index) => {
                        return (
                            <div
                                key={`${index}-folder`}
                                className="folder-content-class card col-md-9"
                                onClick={() => navigate(`/folders/${item.id}`)}
                            >
                                <div className="folder-body-content-class">
                                    <span> {item?.totalStudySets} học phần</span>
                                    <span>&#124;</span>
                                    <img
                                        className="img-by-user-create"
                                        src={`data:image/jpeg;base64,${item?.user?.image}`}
                                    />
                                    <span>&#124;</span>
                                    <span className="name-text">{item?.user?.userName}</span>
                                </div>
                                <div className="folder-header-text-class">
                                    <span className="class-body-text"> Thư mục: {item.folderName}</span>
                                </div>

                                {/* <div className="folder-footer-content-class">
                                    <img
                                        className="img-by-user-create"
                                        src={`data:image/jpeg;base64,${item?.user?.image}`}
                                    />
                                    <span className="name-text">{item?.user?.userName}</span>
                                </div> */}
                            </div>
                        );
                    })}
                {folders && folders.length === 0 && <div> Không có thư mục</div>}
            </div>

            {/* <div className="header-class">
                <button className="btn btn-primary">add studyfolder</button>
                <button className="btn btn-primary">add Class</button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        folderShow(true);
                    }}
                >
                    add member
                </button>
                <button className="btn btn-primary">folderting</button>
            </div> */}
        </>
    );
};

export default FolderFromClass;
