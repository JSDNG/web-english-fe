// class component
// function component
import React from "react";

class MyComponent extends React.Component{
    state={name: 'quynh', address: 'hcm'};

    handleClick(event){
        //console.log(event.target);
        console.log("name", this.state.name);
        //merge State => react class
        this.setState({
            name: 'dev'
        });
    }
    //jsx
    render(){
        return(
            <div>
                {this.state.name}
                <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
            </div>
        )
    }
}

export default MyComponent;