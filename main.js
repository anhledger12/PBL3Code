function dosth(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.aspx", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle the response from the server
        var response = xhr.responseText;
        console.log(response);
      }
    };
    var data =
      "username=" +
      encodeURIComponent(username) +
      "&password=" +
      encodeURIComponent(password);
    xhr.send(data);
}