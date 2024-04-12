import { useState } from "react";
import ModalFolder from "./ModalFolder";

const ManageFolder = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <ModalFolder show={show} setShow={setShow} />
        </div>
    );
};

export default ManageFolder;
