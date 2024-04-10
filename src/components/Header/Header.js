import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

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
                            <NavDropdown.Item href="#action/3.1">Học phần</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.2">Thư mục</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lớp</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        {/* <NavLink to="#" className="nav-link">
                            Lời giải chuyên gia
                        </NavLink> */}
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
                        <NavDropdown title="Cài đặt chung" id="basic-nav-dropdown">
                            <NavDropdown.Item>Tên user</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Hồ sơ</NavDropdown.Item>
                            <NavDropdown.Item>Ngôn ngữ</NavDropdown.Item>
                            <NavDropdown.Item>Cài đặt</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Đăng xuất</NavDropdown.Item>
                        </NavDropdown>
                        <div></div>
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
