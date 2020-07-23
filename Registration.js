function Registration(){

    var Username = document.getElementById("username").value;
    var Phone = document.getElementById("phone").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var Admin = document.getElementById("admin").value;
    var User = document.getElementById("user").value;

    fetch("http://localhost:8080/api/auth/signup", {
        method: 'POST',
        headers: {
            "content-type": "Application/json"
        },
        body: JSON.stringify({
            "email": Email, 
            "password": Password, 
            "phoneNumber": Phone,
            "role": User,
            "username": Username
        })})
        .then(res => res.text())
        .then(res => console.log(res))

}