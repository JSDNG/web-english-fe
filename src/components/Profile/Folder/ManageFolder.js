import { useState } from "react";
import ModalFolder from "./ModalFolder";
import ListFolder from "./ListFolder";
import Folder from "./Folder";
const ManageFolder = (props) => {
    const [show, setShow] = useState(false);

    const [listFolder, setListFolder] = useState([
        {
            id: 1,
            title: "abc",
            desc: "aaaa",
        },
    ]);
    const [data, setData] = useState({});
    return (
        <>
            <div>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    add folder
                </button>
            </div>

            <ModalFolder show={show} setShow={setShow} />
            <div className="list-folder">
                <ListFolder listFolder={listFolder} setListFolder={setListFolder} />
            </div>
        </>
    );
};

export default ManageFolder;
