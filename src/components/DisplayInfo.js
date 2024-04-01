import React from "react";

class DisplayInfo extends React.Component{
    render(){
        //destructuring array/object
        const listUsers = this.props.listUsers; 
        console.log(listUsers)
        //props => properties
        return(
            <div>
                {listUsers.map((user) =>{
                    return(
                        <div key={user.id}>
                            <div>{user.name}</div>
                            <div>{user.age}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DisplayInfo;
