window.onload = function() {
console.log("Hai");
$background = Math.floor((Math.random()*5)+1);
console.log($background);
document.getElementsByTagName('body')[0].style.background = "url('download'+$background+'.png')";

document.getElementById('submit1').onclick = function save(){
console.log("Submit1Worked");
$username1 = document.getElementById('username1').value;
$password1 = document.getElementById('password1').value;
chrome.storage.sync.set({'username1':$username1} , function(){console.log("saved username 1");});
chrome.storage.sync.set({'password1':$password1} , function(){console.log("saved password 1");});

};

document.getElementById('submit2').onclick = function save(){

$username2 = document.getElementById('username2').value;
$password2 = document.getElementById('password2').value;
chrome.storage.sync.set({'username2':$username2} , function(){console.log("saved username 2");});
chrome.storage.sync.set({'password2':$password2} , function(){console.log("saved password 2");});

};

document.getElementById('submit3').onclick = function save(){

$username3 = document.getElementById('username3').value;
$password3 = document.getElementById('password3').value;
chrome.storage.sync.set({'username3':$username3} , function(){console.log("saved username 3");});
chrome.storage.sync.set({'password3':$password3} , function(){console.log("saved password 3");});

};


function retrieve(){
chrome.storage.sync.get('username1',function(result){
$username1= result.username1;
document.getElementById('username1').value = $username1;

})
chrome.storage.sync.get('password1',function(result){
$password1= result.password1;
document.getElementById('password1').value = $password1;

})

chrome.storage.sync.get('username2',function(result){
$username2= result.username2;
document.getElementById('username2').value = $username2;

})

chrome.storage.sync.get('password2',function(result){
$password2= result.password2;
document.getElementById('password2').value = $password2;

})
chrome.storage.sync.get('username3',function(result){
$username3= result.username3;
document.getElementById('username3').value = $username3;

})
chrome.storage.sync.get('password3',function(result){
$password3= result.password3;
document.getElementById('password3').value = $password3;

})
};
retrieve();

};
