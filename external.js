/*var randnum=Math.floor(Math.random()*6)+1;
var randnum2=Math.floor(Math.random()*6)+1;
var randimg="./images/dice"+randnum+".png";
var randimg2="./images/dice"+randnum2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimg);
document.querySelectorAll("img")[1].setAttribute("src",randimg2);
if(randnum>randnum2){
    document.querySelector(".headng").innerHTML="Player 1 Wins";
}
else if(randnum===randnum2){
    document.querySelector(".headng").innerHTML="It's a Tie";
}
else{
    document.querySelector(".headng").innerHTML="Player 2 Wins";
}*/


document.querySelector(".clickbtn").addEventListener("click", function () {
    var randnum=Math.floor(Math.random()*6)+1;
var randnum2=Math.floor(Math.random()*6)+1;
var randimg="./images/dice"+randnum+".png";
var randimg2="./images/dice"+randnum2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimg);
document.querySelectorAll("img")[1].setAttribute("src",randimg2);
if(randnum>randnum2){
    document.querySelector(".headng").innerHTML="🏳️Player 1 Wins";
}
else if(randnum===randnum2){
    document.querySelector(".headng").innerHTML="🏳️It's a Tie🏳️";
}
else{
    document.querySelector(".headng").innerHTML="Player 2 Wins🏳️";
}
});


document.querySelector(".rollz").addEventListener("click", function () {
    alert("Use the below play button for roll !");
    
});
document.querySelector(".mgz").addEventListener("click", function () {
    alert("More Games Coming Soon till then follow Souvik1064@Github");
    
});