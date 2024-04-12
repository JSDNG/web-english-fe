import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/apiService";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/userAction";

import ManageFolder from "../Profile/Folder/ManageFolder";
import { useState } from "react";
const Header = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const account = useSelector((state) => state.user.account);
    const dispatch = useDispatch();
    //console.log(account);
    const navigate = useNavigate();

    const handleLogOut = async () => {
        let res = await logout(account.email, account.refresh_token);
        //console.log(res);
        if (res && res.EC === 0) {
            //clear redux
            dispatch(doLogout());
            toast.success(res.EM);
            navigate("/");
        } else {
            toast.error(res.EM);
        }
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Quizlet Clone
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Trang chủ
                        </NavLink>
                        <NavDropdown title="Thư viện của bạn" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <NavLink to="/profile" className="nav-link">
                                    Học phần
                                </NavLink>
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                <NavLink to="/profile/folders" className="nav-link">
                                    Thư mục
                                </NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to="/profile/classes" className="nav-link">
                                    Lớp
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavLink to="/admin" className="nav-link">
                            Admin
                        </NavLink>
                        <NavLink to="/user" className="nav-link">
                            User
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Thêm" id="basic-nav-dropdown">
                            <NavDropdown.Item>Học phần</NavDropdown.Item>
                            <NavDropdown.Item>Thư mục</NavDropdown.Item>
                            <NavDropdown.Item>Lớp học</NavDropdown.Item>
                        </NavDropdown>

                        {isAuthenticated === false ? (
                            <>
                                <button
                                    className="btn btn-light"
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                >
                                    Đăng nhập
                                </button>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                        navigate("/register");
                                    }}
                                >
                                    Đăng ký
                                </button>
                            </>
                        ) : (
                            <NavDropdown title="Cài đặt chung" id="basic-nav-dropdown">
                                <NavDropdown.Item> {account.username}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <NavLink to="/profile" className="nav-link">
                                        Hồ sơ
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>Ngôn ngữ</NavDropdown.Item>
                                <NavDropdown.Item>Cài đặt</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onClick={() => {
                                        handleLogOut();
                                    }}
                                >
                                    Đăng xuất
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
