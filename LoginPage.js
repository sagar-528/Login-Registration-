function login(){

    var username = document.getElementById("username").value;
    console.log(username,"name");
    var Password = document.getElementById("password").value;
    console.log(Password,"password");

    fetch("http://localhost:8080/api/auth/signin", {
        method: 'POST',
        body: JSON.stringify({
            "username": username,
            "password": Password
          }),
          headers: {
              "Content-type": "application/json"
          }
        })
        .then(res => res.json())
        .then(res => localStorage.setItem("token", res.accessToken))
        .then(json => console.log(json,"Api Fetch")); 
}