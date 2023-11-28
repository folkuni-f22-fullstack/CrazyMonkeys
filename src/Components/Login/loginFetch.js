const sessionStorageKey = 'jwt'

const handleLoginEmp = async (username, password) => {
    if (sessionStorage.getItem(sessionStorageKey) != null) {
        return;
    }

    const response = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status !== 401){
        const data = await response.json();
        sessionStorage.removeItem(sessionStorageKey)
        sessionStorage.setItem(sessionStorageKey, data.token)
        sessionStorage.setItem('id', data.id)
        // console.log(data);
        return {data}
      }else{
        console.log("login failed: " + response.status);
        return
      }


}


const handleLogout = async () =>{
    sessionStorage.setItem("id", "0")
    sessionStorage.removeItem(sessionStorageKey)

}




export {handleLoginEmp, handleLogout}