import { useContext, useState, useEffect } from "react";
import { FunkyContext } from "../../ContextRoot";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { handleLoginEmp } from "./loginFetch.js";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const { loginDialogRef, stateLoginDialog, setIsLoggedIn, emplyeeStatus, setEmployeeStatus } =
        useContext(FunkyContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username !== "" && password !== "") {
            try {
                // Skicka en förfrågan till backend-routen med Fetch
                const login = await handleLoginEmp(username, password, afterLogin);
                setEmployeeStatus(login.data.status);
                
            } catch (error) {
                console.error("Något gick fel:", error);
            }
        }

        async function afterLogin(login, status) {
            if (login) {
                sessionStorage.getItem("jwt");
                if (sessionStorage.getItem("jwt")) {
                    if (status === "employee") {
                        setIsLoggedIn(true);
                        navigate("/employee");
                        stateLoginDialog(false);
                    } else if (status === "chef"){
                        setIsLoggedIn(true);
                        navigate("/chefsview");
                        stateLoginDialog(false);
                    }
                }
            } else {
                console.error("Inloggning misslyckades:", response);
            }
        }
    };

    const handleLogin = () => {
        if (!username) {
            setUsernameError("Du måste fylla i fältet");
        } else {
            setUsernameError("");
        }

        if (!password) {
            setPasswordError("Du måste fylla i fältet");
        } else {
            setPasswordError("");
        }
        if (username && password) {
            console.log("Nu har du fyllt i både användarnamn och lösenord");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <dialog className="login-overlay" ref={loginDialogRef}>
                <span className="close-overlay" onClick={() => stateLoginDialog(false)}>
                    <AiOutlineClose className="close-icon" />
                </span>
                <h1 className="login-title"> Inloggning för anställda</h1>
                <div
                    className={`username-container ${
                        !username && usernameError ? "error" : username ? "success" : ""
                    }`}
                >
                    <label className="username" htmlFor="username">
                        Användarnamn
                    </label>
                    <input
                        className={`label ${!username && usernameError ? "error" : ""}`}
                        type="text"
                        id="username"
                        placeholder="Användarnamn"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {!username && usernameError && <p className="error-text"> {usernameError}</p>}
                </div>
                <div
                    className={`password-container ${
                        !password && passwordError ? "error" : password ? "success" : ""
                    }`}
                >
                    <label className="password" htmlFor="password">
                        Lösenord
                    </label>
                    <input
                        className={`label ${!password && passwordError ? "error" : ""}`}
                        type="password"
                        id="password"
                        placeholder="Lösenord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!password && passwordError && <p className="error-text">{passwordError}</p>}
                </div>
                <div className="login-btn-div">
                    <button className="btn-grad" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </dialog>
        </form>
    );
}
