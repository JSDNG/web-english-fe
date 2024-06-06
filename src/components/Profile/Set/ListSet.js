import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { getAllSet } from "../../../services/apiService";
import "./ListSet.scss";
import { store } from "../../../redux/store";
const ListStudySet = (props) => {
    const [arrSet, setArrSet] = useState([]);
    const navigate = useNavigate();
    const user_id = store?.getState()?.user?.account?.user_id;
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let res = await getAllSet(user_id);
        if (res && res.ec === 200) {
            setArrSet(res.dt.studySets);
        }
    };
    return (
        <>
            <div className="set-header ">
                <div className="1"> Gần đây</div>
                <div className="search">
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Tìm kiếm" className="me-2" aria-label="Search" />
                    </Form>
                </div>
            </div>
            <div className="list-set">
                {arrSet &&
                    arrSet.length > 0 &&
                    arrSet.map((item, index) => {
                        return (
                            <div
                                key={`${index}-set`}
                                className="card-content card"
                                onClick={() => navigate(`/flash-cards/${item.id}`)}
                            >
                                <div className="card-header-text">
                                    <span>{item.totalCards} học phần &#124;</span>
                                    <span>
                                        <img src={`data:image/jpeg;base64,${item.user.image}`} />
                                    </span>
                                    <span>{item.user.userName} </span>
                                </div>
                                <div className="card-body-content">
                                    <p className="card-body-text">{item.studySetName}</p>
                                </div>
                            </div>
                        );
                    })}
                {arrSet && arrSet.length === 0 && <div> Không có học phần</div>}
            </div>
        </>
    );
};

export default ListStudySet;
