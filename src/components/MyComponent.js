// class component
// function component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo"

class MyComponent extends React.Component{
    state = {
        listUsers: [{id: 1, name: "a", age: "10"},
            {id: 2, name: "b", age: "20"},
            {id: 3, name: "c", age: "30"},
        ]
    }
    //jsx
    render(){
        return(
            <div>               
                <UserInfo />
                <DisplayInfo listUsers = {this.state.listUsers}/>
            </div>
        )
    }
}

export default MyComponent;