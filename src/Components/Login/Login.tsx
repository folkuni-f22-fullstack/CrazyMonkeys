import { useContext, useState } from "react";
import { FunkyContext } from "../../ContextRoot";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const { loginDialogRef, stateLoginDialog, setUserToken, setCurrentUser } = useContext(FunkyContext);

    const handleLogin = async (username, password) => {
      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          const { token, user } = data;
  
          // Spara token och användarinformation i state
          setUserToken(token);
          setCurrentUser(user);
  
          // Stäng inloggning dialog
          stateLoginDialog(false);
  
          // Om du vill göra något efter inloggning, t.ex. navigera till en annan sida
          navigate("/dashboard");
        } else {
          console.error("Inloggning misslyckades:", response.statusText);
        }
      } catch (error) {
        console.error("Något gick fel:", error);
      }
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

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
