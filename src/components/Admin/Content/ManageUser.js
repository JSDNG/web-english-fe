import ModalCreactUser from "./ModalCreactUser";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">manage</div>
            <div classNameName="content">
                <div>
                    <button>Add user</button>
                </div>
                <div>
                    <table>table</table>
                    <ModalCreactUser />
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
