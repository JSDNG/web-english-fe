import { useState } from "react";
import ModalAddMember from "./ModalAddMember";
import ListStudySet from "./ListStudySet";
const ManageClass = (props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="header-class">
                <button className="btn btn-primary">add studyset</button>
                <button className="btn btn-primary">add folder</button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        setShow(true);
                    }}
                >
                    add member
                </button>
                <button className="btn btn-primary">Setting</button>
            </div>
            <ModalAddMember show={show} setShow={setShow} />
            <ListStudySet />
        </>
    );
};

export default ManageClass;
