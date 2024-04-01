import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShow: true,
    };

    handleOnClick = (event) => {
        this.setState({
            isShow: !this.state.isShow,
        });
    };
    render() {
        //destructuring array/object
        const listUsers = this.props.listUsers;
        //props => properties
        return (
            <div>
                <div onClick={(event) => this.handleOnClick(event)}>
                    {this.state.isShow === true ? "hide list user" : "Show list user"}
                </div>
                {this.state.isShow && (
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                    <div>{user.name}</div>
                                    <div>{user.age}</div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfo;
