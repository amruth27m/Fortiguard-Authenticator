//authenticator class
function authenticator(browser) {
  this.browsername = browser;
  this.loginstatus = false;
  this.setUserName = function(username)
  {
    if(document.getElementById('ft_un').value = username)
    return true;
    else
    return false;
  }

  this.setPassword = function(password)
  {
    if(document.getElementById('ft_pd').value = password)
    return true;
    else
    return false;
  }
  this.completeLogin = function() {
    document.getElementsByTagName('input')[4].click()
    this.loginstatus = true;
  }
  this.getLoginStatus = function() {
    return this.loginstatus;
  }
  this.getBrowserName = function() {
    return this.browsername;
  }
}
//userprofile class

function userprofile(username,password){
  this.username = username;
  this.password = password;
  this.getUserName = function() {
    return this.username;
  }
  this.getPassword = function() {
    return this.password;
  }
}

//communicator class
function  communicator(browser) {
  this.browsername = browser;
  this.getUserProfile1 = function() {
    var username2,password1;
    chrome.storage.sync.get("username1",function(value){
      username2 = value.username1;
      console.log(username2);
    });
    chrome.storage.sync.get("password1",function(value){
      password1 = value.password1;
    });
  }


  this.getUserProfile2 = function() {
    //recieve user2 from popup script if the  first login fails
  }

  this.sendLoginStatus = function() {
    //sent login status from content script to popup script
  }
}




//user class

function User(communicator,authenticator) {
  this.communicator = communicator;
  this.authenticator = authenticator;
  this.UserProfile1 = communicator.getUserProfile1();
  this.UserProfile2 = communicator.getUserProfile2();
  this.login = function() {
  if(this.authenticator.setUserName(this.UserProfile1.getUserName())&&this.authenticator.setPassword(this.UserProfile1.getPassword()))
    this.authenticator.completeLogin();
    else
    console.log('error in logging in using UserProfile1');
    if(!this.authenticator.getLoginStatus())
      {
      if(this.authenticator.setUserName(this.UserProfile2.getUserName())&&this.authenticator.setPassword(this.UserProfile2.getPassword()))
      this.authenticator.completeLogin();
      else
      console.log('error in logging in using UserProfile2');
      }
    if(!this.authenticator.getLoginStatus())
    console.log('fatal error in loggin in');
   }
}

var chromeRadio = new communicator("chrome");
var chromeAuthenticator = new authenticator("chrome");
chromeRadio.getUserProfile1();
