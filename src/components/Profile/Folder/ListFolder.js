import { useState } from "react";
import ModalFolder from "./ModalFolder";

const ListFolder = (props) => {
    const { listFolder, setListFolder } = props;
    const [show, setShow] = useState(false);

    return (
        <>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listFolder &&
                        listFolder.length > 0 &&
                        listFolder.map((item, index) => {
                            return (
                                <tr key={`table-user${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.desc}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default ListFolder;
