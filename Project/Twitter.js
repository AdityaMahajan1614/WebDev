document.querySelector(".tweet-icon").addEventListener("click",popup);
function popup(){
    window.open('tweet.html',"What's Happenning",'popupWindow,height=400,width=700,left=400,top=200,menubar=no,toolbar=no,location=no');
}
function progress(){
    alert("In Progress, Thanks for your patience!");
}
document.querySelector("#verified-btn").addEventListener("click",progress);