import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getClassWithPage } from "../../../services/apiService";
import "./GetClass.scss";
import { store } from "../../../redux/store";
const GetClass = (props) => {
    const [data, classData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);
    const user_id = store?.getState()?.user?.account?.user_id;
    const getData = async () => {
        let res = await getClassWithPage(user_id, 1, 3);
        console.log("get class", res);
        if (res && res.ec === 200) {
            classData(res.dt.classes);
        }
    };

    return (
        <div className="get-class-home-page">
            <div>
                <span className="title">Lớp của bạn</span>
            </div>
            <div className="class-home-custom row row-cols-md-3 g-4">
                {data &&
                    data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <div
                                    className="class-navigate card"
                                    onClick={() => {
                                        navigate(`/classes/${item.id}`, {
                                            state: {
                                                data: item.className,
                                            },
                                        });
                                    }}
                                >
                                    <div className="class-home-card">
                                        <div className="class-home-a">
                                            <div>
                                                <span className="class-home-a-title">{item.className}</span>
                                            </div>
                                            <div className="image-custom">
                                                <img
                                                    className="image-class-custom"
                                                    src={`data:image/jpeg;base64,${item?.user?.image}`}
                                                />
                                            </div>
                                        </div>

                                        <div className="class-home-c">
                                            <span className="card-text-class-home">{item.numOfFolder} thư mục</span>
                                            <span className="card-text-class-home">{item.numOfMember} thành viên</span>
                                            <span className="name-text">Tạo bởi {item?.user?.userName}</span>
                                        </div>
                                    </div>
                                </div>

                                {data && data.length === 0 && <div></div>}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default GetClass;
