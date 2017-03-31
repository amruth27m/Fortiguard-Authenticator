//Authenticator class
function authenticator(browser){
	this.browsername = browser;
	this.loginstatus = false;
	this.currentuser = "Null";
	this.getBrowserName = function(){		//Getters
		return this.browsername;
	}
	this.getLoginStatus = function(){
		return this.loginstatus;
	}
	this.getCurrentUser = function(){
		return this.currentuser;
	}

	this.setBrowserName = function(browser){		//Setters
		this.browsername = browser;
	}
	this.setLoginStatus = function(loginstatus){
		this.loginstatus = loginstatus;
	}
	this.setCurrentUser = function(currentuser){
		this.currentuser = currentuser;
	}
	this.completeLogin() = function(){
		document.getElementsByTagName('input')[4].click()
		this.loginstatus = true;
	}
}
function communicator(browser){
	this.browsername = browser;
	this.setUserProfile1 = function(){
		chrome.storage.sync.get("username1",function(value){
			document.getElementById('ft_un').value = value.username1
		}
		chrome.storage.sync.get("password1",function(value){
			document.getElementById('ft_pd').value = value.password1;
		}
	}

	this.setUserProfile2 = function(){
		chrome.storage.sync.get("username2",function(value){
			document.getElementById('ft_un').value = value.username2
		}
		chrome.storage.sync.get("password2",function(value){
			document.getElementById('ft_pd').value = value.password2;
		}
	}

	this.setUserProfile3 = function(){
		chrome.storage.sync.get("username3",function(value){
			document.getElementById('ft_un').value = value.username3
		}
		chrome.storage.sync.get("password3",function(value){
			document.getElementById('ft_pd').value = value.password3;
		}
	}
}

				
	
var chromeRadio = new communicator("chrome");
var chromeAuthenticator = new authenticator("chrome");
chromeRadio.setUserProfile1();
chromeAuthenticator.completeLogin();
