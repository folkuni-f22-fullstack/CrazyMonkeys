import { useContext, useState } from "react";
import { FunkyContext } from "../../ContextRoot";

export function Login() {
  const { loginDialogRef, stateLoginDialog, setIsLoggedIn } = useContext(FunkyContext);

  const [userName, setUserName] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const onChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(userName !== "" && userPassword !== "") {
      setIsLoggedIn(true)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <dialog className="login-overlay" ref={loginDialogRef}>
          <span className="close-overlay" onClick={() => stateLoginDialog(false)}>
            <button className="closebtn"> ✖️</button>
          </span>
          <h1 className="login-title">Inlogg för Anställda</h1>
          <div className="username-container">
            <label className="username" htmlFor="username">
              Användarnamn
            </label>
            <input className="label" type="text" value={userName} onChange={() => onChangeUserName(event)} id="username" placeholder="användarnamn" />
          </div>
          <div className="password-container">
            <label className="password" htmlFor="password" >
              Lösenord
            </label>
            <input className="label" value={userPassword} onChange={() => onChangeUserPassword(event)} type="password" id="password"placeholder="lösenord" />
          </div>
          <button className="login-btn">Login</button>
      </dialog>
    </form>
  );
}
