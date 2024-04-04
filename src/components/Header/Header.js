import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
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
                            <NavDropdown.Item href="#action/3.2">Lời giải chuyên gia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Thư mục</NavDropdown.Item>
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
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>test 1</NavDropdown.Item>
                            <NavDropdown.Item>test 2</NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        <button className="btn-login">Đăng nhập</button>
                        <button className="btn-signup">Đăng ký</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
