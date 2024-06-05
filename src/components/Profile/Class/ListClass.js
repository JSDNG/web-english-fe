import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { getAllClass } from "../../../services/apiService";
import "./ListClass.scss";
import { store } from "../../../redux/store";
const ListClass = (props) => {
    const [arrClass, setArrClass] = useState([]);
    const navigate = useNavigate();
    const user_id = store?.getState()?.user?.account?.user_id;
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let res = await getAllClass(user_id);
        if (res && res.ec === 200) {
            setArrClass(res.dt.classes);
        }
    };
    return (
        <div className="list-class-main container">
            <div className="class-header ">
                <div className="1"> Gần đây</div>
                <div className="search">
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Tìm kiếm lớp" className="me-2" aria-label="Search" />
                    </Form>
                </div>
            </div>
            <div className="list-class ">
                {arrClass &&
                    arrClass.length > 0 &&
                    arrClass.map((item, index) => {
                        return (
                            <div
                                key={`${index}-class`}
                                className="class-content card"
                                onClick={() =>
                                    navigate(`/classes/${item.id}`, {
                                        state: {
                                            data: item.className,
                                        },
                                    })
                                }
                            >
                                <div className="card-header-text-class">
                                    <span className="text">{item.numOfFolder} thư mục </span>
                                    <span className="t">&#124;</span>
                                    <span className="text">{item.numOfMember} thành viên </span>
                                    <span className="t">&#124;</span>
                                    <span className="text"> Tạo bởi {item?.user?.userName}</span>
                                </div>
                                <div className="card-body-content-class">
                                    <span className="card-body-text-class">{item.className}</span>
                                </div>
                            </div>
                        );
                    })}
                {arrClass && arrClass.length === 0 && <div> No Class</div>}
            </div>
        </div>
    );
};

export default ListClass;
