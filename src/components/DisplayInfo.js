import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

//stateless vs stateful
// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log(">> call constructor: 1");
//         super(props);
//         this.state = {
//             isShow: true,
//         };
//     }

//     componentDidMount() {
//         console.log(">> call me component di mount");
//         setTimeout(() => {
//             document.title = "hoi dan id";
//         }, 3000);
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(">> call me component di update");
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length == 5) {
//                 alert("happy");
//             }
//         }
//     }
//     handleOnClick = (event) => {
//         this.setState({
//             isShow: !this.state.isShow,
//         });
//     };
//     render() {
//         console.log(">> call me render");
//         //destructuring array/object
//         const listUsers = this.props.listUsers;

//         //props => properties
//         //template + logic js
//         return (
//             <div className="Display-info-container">
//                 {/* <img src={logo} /> */}
//                 <div onClick={(event) => this.handleOnClick(event)}>
//                     {this.state.isShow === true ? "hide list user" : "Show list user"}
//                 </div>
//                 {this.state.isShow && (
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={user.age > 18 ? "green" : "red"}>
//                                     <div>{user.name}</div>
//                                     <div>{user.age}</div>
//                                     <div>
//                                         <button onClick={(event) => this.props.handleDeleteUser(user.id)}>
//                                             Delete
//                                         </button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    return (
        <div className="Display-info-container">
            {true && (
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
