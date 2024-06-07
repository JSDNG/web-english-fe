import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./CreateSet.scss";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { putUpdateSet } from "../../../services/apiService";
import { toast } from "react-toastify";
const EditSet = (props) => {
    const [cardIndex, SetCardIndex] = useState(0);
    const [title, setTitle] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [arrCard, setArrCard] = useState([]);

    useEffect(() => {
        setTitle(location?.state?.data[0]?.studySetName);

        // Tạo một bản sao của mảng Cards và thiết lập trạng thái mặc định
        const data = location?.state?.data[0]?.cards.map((item) => ({
            ...item,
            task: 3,
        }));
        setArrCard(data);
    }, [location]);

    const userId = useSelector((state) => state.user.account.user_id);
    const handleSubmit = async (event) => {
        let arrCardClone = _.cloneDeep(arrCard);
        arrCardClone = arrCardClone.filter((item) => item.term === "" || item.definition === "");
        if (arrCardClone.length > 0) {
            toast.error("Vui lòng nhập đầy đủ thông tin thẻ!");
            return;
        }
        let data = {
            id: location?.state?.data[0]?.id,
            studySetName: title,
            //userId: userId,
            cards: arrCard,
        };
        data.cards.forEach((card) => {
            if (card.task === 0) {
                delete card.id;
            }
        });
        console.log(data);
        let res = await putUpdateSet(data);
        console.log(res);
        if (res && res.ec === 200) {
            toast.success(res.em);
            navigate(`/flash-cards/${location?.state?.data[0]?.id}`);
        }
        if (res && +res.ec !== 200) {
            toast.error(res.em);
        }
    };
    // add 0, update 1, delete 2, non 3
    const handleAddUpdateDeleteCard = (type, id, task) => {
        if (type === "ADD") {
            let newCard = {
                id: uuidv4(),
                term: "",
                definition: "",
                task: 0,
            };
            setArrCard([...arrCard, newCard]);
        }
        if (type == "DELETE") {
            if (task == 3) {
                let arrCardClone = _.cloneDeep(arrCard);
                let index = arrCardClone.findIndex((item) => item.id == id);
                if (index > -1) {
                    arrCardClone[index].task = 2;
                    setArrCard(arrCardClone);
                }
            } else {
                let arrCardClone = _.cloneDeep(arrCard);
                arrCardClone = arrCardClone.filter((item) => item.id !== id);
                setArrCard(arrCardClone);
            }
        }
    };
    const handelOnChange = (type, id, value, task) => {
        let arrCardClone = _.cloneDeep(arrCard);
        let index = arrCardClone.findIndex((item) => item.id == id);
        if (index > -1) {
            if ((type === "term" || type === "definition") && (task === 3 || task === 1)) {
                arrCardClone[index][type] = value;
                arrCardClone[index].task = 1;
            } else if (task === 0) {
                arrCardClone[index][type] = value;
            }
            setArrCard(arrCardClone);
        }
    };
    return (
        <div className="create-set-container">
            <div className="set-header-container">
                <span> Chỉnh sửa học phần</span>
                <button className="btn btn-light" onClick={() => handleSubmit()}>
                    Hoàn tất
                </button>
            </div>
            <div className="set-header-tille-custom input-group mb-3">
                <div>
                    <span>Tiêu đề</span>
                </div>
                <div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên tiêu đề"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
            </div>

            {arrCard &&
                arrCard.length > 0 &&
                arrCard.map((item, index) => {
                    if (item.task != 2) {
                        return (
                            <div key={`${index}-card-edit`} className="card card-main-container">
                                <div className="card-header-1 container">
                                    <span>{index + 1}</span>
                                    {arrCard.length > 1 && (
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleAddUpdateDeleteCard("DELETE", item.id, item.task)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                                <hr />

                                <div className="cards-content container">
                                    <div className="col-sm-6">
                                        <div>
                                            <span>Thuật ngữ</span>
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                className="form-control "
                                                value={item.term}
                                                onChange={(event) =>
                                                    handelOnChange("term", item.id, event.target.value, item.task)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div>
                                            <span>Định nghĩa</span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control "
                                            value={item.definition}
                                            onChange={(event) =>
                                                handelOnChange("definition", item.id, event.target.value, item.task)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}

            <div className="text-center">
                <button className="btn btn-primary text" onClick={() => handleAddUpdateDeleteCard("ADD", "")}>
                    Thêm thẻ
                </button>
            </div>
            <div className="create-set-footer">
                <button className="btn btn-light " onClick={() => handleSubmit()}>
                    Hoàn tất
                </button>
            </div>
        </div>
    );
};

export default EditSet;
