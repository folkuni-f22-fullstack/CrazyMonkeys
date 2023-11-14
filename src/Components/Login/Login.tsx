import { useContext } from "react";
import { FunkyContext } from "../../ContextRoot";

export function Login() {
  const { loginDialogRef, stateLoginDialog } = useContext(FunkyContext);

  return (
    <dialog className="login-overlay" ref={loginDialogRef}>
        <span className="close-overlay" onClick={() => stateLoginDialog(false)}>
          <button className="closebtn"> ✖️</button>
        </span>
        <h1 className="login-title"> Inlogg förAnställda</h1>
        <div className="username-container">
          <label className="username" htmlFor="username">
            Användarnamn
          </label>
          <input className="label" type="text" id="username" placeholder="användarnamn" />
        </div>
        <div className="password-container">
          <label className="password" htmlFor="password" >
            Lösenord
          </label>
          <input className="label" type="password" id="password"placeholder="lösenord" />
        </div>
        <button className="login-btn">Login</button>
    </dialog>
  );
}
