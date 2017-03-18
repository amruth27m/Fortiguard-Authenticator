//userprofile class
document.getElementById("saveuser1").onclick = function()
{
  console.log("adsf");
};

function userprofile(username,password,communicator){
  this.username = username;
  this.password = password;
  this.communicator = communicator;
}

function  communicator(browser) {
  this.browsername = browser;
  this.setUserProfile1 = function(username1,password1) {
    chrome.storage.sync.set({"username1":username1},function(){console.log(username1);});
    chrome.storage.sync.set({"password1":password1});
  }

  this.setUserProfile2 = function() {
    chrome.storage.sync.set({"username2":username});
    chrome.storage.sync.set({"password2":password});
  }

  this.getLoginStatus = function() {
    //recieve login status from content script
  }
}
var chromeRadio = new communicator("chrome");
var user1 = new userprofile("dsafadsfdsa",1234,chromeRadio);
user1.communicator.setUserProfile1(user1.username,user1.password);
