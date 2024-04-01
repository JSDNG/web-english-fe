// class component
// function component
import React from "react";

class MyComponent extends React.Component{
    state={name: 'quynh', address: 'hcm'};
    //jsx
    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default MyComponent;