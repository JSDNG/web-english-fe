import ModalClass from "./ModalClass";
import { useState } from "react";
const Class = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <ModalClass show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
};

export default Class;
