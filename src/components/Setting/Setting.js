import "./Setting.scss";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import ModalChangePassWord from "./ModalChangePassWord";
import ModalChangeUserName from "./ModalChangeUserName";
import { useState } from "react";
const Setting = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const account = useSelector((state) => state?.user?.account);
    const [image, setImage] = useState(account?.image);
    const [username, setUsername] = useState(account?.username);
    const handleAddImage = () => {
        //setImage()
        alert("me");
    };
    const handleChangeImage = () => {
        alert("me");
    };
    return (
        <div className="setting-container-custom">
            <div className="header-setting">
                <span>Cài đặt</span>
            </div>
            <div className="body-content-setting">
                <div className="customs-header-ul">
                    <span>Thông tin cá nhân</span>
                </div>
                <div className="setting-info-custom card pt-2">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item ">
                            <div className="title-image-setting">
                                <span className="fw-semibold"> Ảnh hồ sơ</span>
                            </div>
                            <div className="control-setting-image-custom">
                                <div>
                                    <img
                                        className="setting-image-custom-main"
                                        src={`data:image/jpeg;base64,${image}`}
                                    />
                                </div>
                                <div className="control-setting-list-image-custom">
                                    <div className="control-setting-list-image-custom-1">
                                        <img
                                            className="setting-image-custom"
                                            src={`data:image/jpeg;base64,${image}`}
                                            onClick={() => handleChangeImage()}
                                        />
                                        <img
                                            className="setting-image-custom"
                                            src={`data:image/jpeg;base64,${image}`}
                                            onClick={() => handleChangeImage()}
                                        />
                                        <img
                                            className="setting-image-custom"
                                            src={`data:image/jpeg;base64,${image}`}
                                            onClick={() => handleChangeImage()}
                                        />
                                        <img
                                            className="setting-image-custom"
                                            src={`data:image/jpeg;base64,${image}`}
                                            onClick={() => handleChangeImage()}
                                        />
                                    </div>
                                    <div className="control-setting-list-image-custom-1">
                                        <img
                                            className="setting-image-custom"
                                            src={`data:image/jpeg;base64,${image}`}
                                            onClick={() => handleChangeImage()}
                                        />
                                        <span className="setting-add-image-custom">
                                            <AiOutlinePlus onClick={() => handleAddImage()} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-item p-3 d-flex">
                            <div>
                                <div>
                                    <span className="fw-semibold">Tên người dùng</span>
                                </div>
                                <div>
                                    <span>{username}</span>
                                </div>
                            </div>

                            <button className="btn btn-light ml-auto" onClick={() => setShow1(true)}>
                                Sửa
                            </button>
                            <ModalChangeUserName
                                show={show1}
                                setShow={setShow1}
                                usernameold={username}
                                setUsernameold={setUsername}
                            />
                        </div>
                        <div className="list-group-item p-3">
                            <div>
                                <span className="fw-semibold">Email</span>
                            </div>
                            <div>
                                <span>{account.email}</span>
                            </div>
                        </div>
                        <div className="list-group-item d-flex gap-5 p-3">
                            <span className="fw-semibold">Loại tài khoản</span>
                            <span className="sos ml-auto"> {account.role}</span>
                        </div>
                        <div className="list-group-item d-flex align-items-center p-3">
                            <span className="fw-semibold">Mật khẩu</span>
                            <button className="btn btn-light ml-auto" onClick={() => setShow(true)}>
                                Sửa
                            </button>

                            <ModalChangePassWord show={show} setShow={setShow} />
                        </div>
                    </div>
                </div>
                <div className="customs-header-ul">
                    <span>Giao diện</span>
                </div>
                <div className="setting-interface-custom card">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item">Hình nền</div>
                        <div className="list-group-item">Ngôn ngữ</div>
                    </div>
                </div>

                {/* <div className="customs-header-ul">
                    <span>Thông báo</span>
                </div>
                <div className="setting-notif-custom card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Setting;
