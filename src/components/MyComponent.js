// class component
// function component
import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "a", age: "10" },
        { id: 2, name: "b", age: "20" },
        { id: 3, name: "c", age: "30" },
    ]);
    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        setListUsers(listUsersClone.filter((item) => item.id !== userId));
    };
    return (
        <>
            <div className="a">
                <AddUserInfo handleAddNewUser={handleAddNewUser} />
                <br />
                <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
            </div>
            <div className="b"></div>
        </>
    );
};
export default MyComponent;
