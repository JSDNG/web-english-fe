import { useState } from "react";
import _ from "lodash";
import "./DetailCard.scss";
const DetailCard = (props) => {
    const { index, card } = props;
    const [show, setShow] = useState(false);
    if (_.isEmpty(card)) {
        return <></>;
    }

    // console.log(card);
    return (
        <>
            <div key={`${card?.id}-card`} className="detail-card card">
                <div className="card-text">
                    {show ? (
                        <span onClick={() => setShow(false)}>{card?.definition}</span>
                    ) : (
                        <span onClick={() => setShow(true)}>{card?.term}</span>
                    )}
                </div>
            </div>
        </>
    );
};

export default DetailCard;
