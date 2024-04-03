import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Quizlet Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">
                            Trang chủ
                        </Link>
                        <NavDropdown title="Thư viện của bạn" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Học phần</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lời giải chuyên gia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Thư mục</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/" className="nav-link">
                            Lời giải chuyên gia
                        </Link>
                        <Link to="/admin" className="nav-link">
                            Admin
                        </Link>
                        <Link to="/user" className="nav-link">
                            User
                        </Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
