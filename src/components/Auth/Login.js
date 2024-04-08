import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBackOutline } from "react-icons/io5";
import "./Login.scss";
import { set } from "lodash";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const handleLogin = async () => {
        //validate

        //api
        let res = await postLogin(email, password);

        if (res && +res.EC === 0) {
            toast.success(res.EM);
            navigate("/");
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM);
        }
    };
    return (
        <>
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="image-login"
                alt="Phone image"
            />
            <div className="back">
                <IoArrowBackOutline
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </div>
            <div className="action-choose">
                <button className="btn btn-light col-2">Sign up</button>
                <button className="btn btn-light col-2">Log in</button>
            </div>
            <div className="login-container col-4">
                <div>
                    <label className="form-label">Email</label>
                    <input
                        type={"email"}
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label className="form-label">Password</label>
                    <input
                        type={"password"}
                        className="form-control"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="forgot-password">
                    <span>Forgot password?</span>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        Log in
                    </button>
                </div>

                <div>
                    <br />
                </div>

                <div>
                    <button className="btn btn-light">
                        <FcGoogle className="mx-2" />
                        Continue with Google
                    </button>
                </div>
                <div>
                    <button className="btn btn-light">
                        <FaFacebook className="mx-2" />
                        Continue with Facebook
                    </button>
                </div>
            </div>
            {/* <div className="signup-container col-4" >
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label>password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className="forgot-password">Forgot password?</span>
                <div>
                    <button className="btn btn-primary" size="lg">
                        Sign in
                    </button>
                </div>

                <div>
                    <br />
                </div>

                <div>
                    <button className="btn btn-light">
                        <FcGoogle className="mx-2" />
                        Continue with Google
                    </button>
                </div>
                <div>
                    <button className="btn btn-light">
                        <FaFacebook className="mx-2" />
                        Continue with Facebook
                    </button>
                </div>
            </div> */}
        </>
    );
};

export default Login;
