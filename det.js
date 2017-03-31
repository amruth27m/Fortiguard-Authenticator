function logInStatus() {
  $title = document.title;
  if($title == "Firewall Authentication") {
    console.log("LogIn");
    return 1;
  }
  else if ($title == "Firewall Authentication Keepalive Window") {
    console.log("LoggedIn");
    return 2;
  }
  else {
    console.log("Not log in page");
    return 3;
  }
}

console.log(logInStatus());
