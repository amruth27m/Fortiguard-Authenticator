window.onload = function() {
console.log("Hai");
//$background = Math.floor((Math.random()*5)+1);
//document.getElementsByTagName('body')[0].style.background = "url('download'+$background+'.png')";

$flag = true;
if($flag){
  $('#status').attr('src','pos.png');
}
else {
  $('#status').attr('src','neg.png');
}


$currentTime = new Date().getHours();
console.log($currentTime)
if ($currentTime >= 5 && $currentTime < 17) {
  $('body').css('background',"url('morning.png')");
}

else if ($currentTime >= 7 && $currentTime <= 20) {

        $('body').css('background',"url('evening.jpg')");
        $('input').css('borderColor','red');
        $('button').css('background','red');
        $('input').on('focusout',function(){
              $(this).css('color','white');
        });
        $('input').on('focus',function(){
              $(this).css('color','red');
        });
        $('input').css('background','linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #FF0000 4%)');
        $('input').css('border-bottom','solid 1px #FF0000');


}

else {
        $('body').css('background',"url('night.png')");
}

$('body').css('background-size','cover');

$(document).keypress(function (e) {
 var key = e.which;
 if(key == 13)
  {
    $('#submit1').click();
    $('#submit2').click();
    $('#submit3').click();
    return false;
  }
});


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
