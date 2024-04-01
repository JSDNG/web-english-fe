// class component
// function component
import React from "react";

class MyComponent extends React.Component{
    state={name: 'quynh', address: 'hcm'};

    handleOnChangeInput = (event) =>{
        this.setState({
            name: event.target.value
        });
    }
    handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        
    }
    //jsx
    render(){
        return(
            <div>
                {this.state.name}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" 
                    onChange={(event)=> this.handleOnChangeInput(event)}/>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;