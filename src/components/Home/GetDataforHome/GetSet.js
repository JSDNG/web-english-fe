import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSetWithPage } from "../../../services/apiService";
import "./GetSet.scss";
import { store } from "../../../redux/store";
const GetSet = (props) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const user_id = store?.getState()?.user?.account?.user_id;
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let res = await getSetWithPage(user_id, 1, 3);
        if (res && res.ec === 200) {
            setData(res.dt.studySets);
        }
    };

    return (
        <div className="get-set-home-page">
            <div>
                <span className="title">Gần đây</span>
            </div>
            <div className="set-home-custom row row-cols-md-3 g-4">
                {data &&
                    data.length > 0 &&
                    data.map((item, index) => {
                        return (
                            <div className="col" key={index}>
                                <div
                                    
                                    className="set-navigate card"
                                    onClick={() => {
                                        navigate(`/flash-cards/${item.id}`);
                                    }}
                                >
                                    <div className="set-home-card">
                                        <div className="set-home-a">
                                            <span className="set-home-a-title">{item.studySetName}</span>
                                        </div>
                                        <div className="set-home-b">
                                            <span className="card-text-set-home">{item.totalCards} thuật ngữ</span>
                                        </div>
                                        <div className="set-home-c">
                                            <img src={`data:image/jpeg;base64,${item?.user?.image}`} />
                                            <span className="name-text">{item?.user?.userName}</span>
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

export default GetSet;
