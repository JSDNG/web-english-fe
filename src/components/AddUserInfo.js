import React from "react";

class AddUserInfo extends React.Component {
    state = { name: "", age: "" };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + "-random",
            name: this.state.name,
            age: this.state.age,
        });
    };

    render() {
        return (
            <div>
                name : {this.state.name} age : {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />

                    <input type="text" value={this.state.age} onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfo;
