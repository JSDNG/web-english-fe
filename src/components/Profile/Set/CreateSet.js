import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateSet.scss";
const CreateSet = (props) => {
    const [cardIndex, SetCardIndex] = useState(0);
    const [title, setTitle] = useState("");
    const [tern, setTern] = useState("");
    const [definition, setDefinition] = useState("");

    const userId = useSelector((state) => state.user.account.user_id);
    const handleSubmit = (event) => {
        let data = {
            studySetName: title,
            userId: userId,
            cards: [],
        };
        let cards = [
            {
                tern: "",
                definition: "",
            },
        ];
        console.log(data);
    };
    return (
        <div className="create-set-container">
            <div className="set-header-container">
                <span> Tạo học phần mới</span>
                <button className="btn btn-light">Tạo</button>
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên tiêu đề"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="set-main-container">
                <div className="card">
                    <div className="card-header-1 container">
                        <span>1</span>
                        <button className="btn btn-light">Delete</button>
                    </div>
                    <hr />
                    <div className="card-body-1 container">
                        <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Thuật ngữ"
                                value={tern}
                                onChange={(event) => setTern(event.target.value)}
                            />
                        </div>
                        <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Định nghĩa"
                                value={definition}
                                onChange={(event) => setDefinition(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary text">Thêm thẻ</button>
            </div>
            <div className="create-set-footer">
                <button className="btn btn-light " onClick={() => handleSubmit()}>
                    Tạo
                </button>
            </div>
        </div>
    );
};

export default CreateSet;
