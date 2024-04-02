import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

//stateless vs stateful
const DisplayInfo = (props) => {
    const { listUsers } = props; //object

    const [isShow, setShow] = useState(true);

    const handleOnClickButton = (event) => {
        setShow(!isShow);
    };
    console.log(">> check");
    useEffect(() => {
        if (listUsers.length === 0) {
            alert("delete add");
        }
        console.log(">> useEffect");
    }, [listUsers]);
    return (
        <div className="Display-info-container">
            <div onClick={(event) => handleOnClickButton(event)}>
                {isShow === true ? "Hide List User" : "Show List User"}
            </div>
            {isShow && (
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                <div>{user.name}</div>
                                <div>{user.age}</div>
                                <div>
                                    <button onClick={(event) => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};
export default DisplayInfo;
