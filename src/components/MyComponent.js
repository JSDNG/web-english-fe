// class component
// function component
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "a", age: "10" },
            { id: 2, name: "b", age: "20" },
            { id: 3, name: "c", age: "30" },
        ],
    };

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        });
    };

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        this.setState({
            listUsers: listUsersClone.filter((item) => item.id !== userId),
        });
    };
    //jsx
    render() {
        return (
            <>
                <div>
                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                    <br />
                    <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
                </div>
                <div></div>
            </>
        );
    }
}

export default MyComponent;
