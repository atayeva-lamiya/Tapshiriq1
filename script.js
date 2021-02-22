var Qutu = document.querySelectorAll(".qutu");
var Button = document.querySelector(".button");

Button.onclick = function (){
    this.style.backgroundColor="darkblue";
    Qutu[0].style.backgroundColor="green";
    Qutu[1].style.backgroundColor="red";
    Qutu[2].style.backgroundColor="blue";
    Qutu[3].style.backgroundColor="black";
    Qutu[0].style.width="200px";
    Qutu[1].style.width="200px";
    Qutu[2].style.width="200px";
    Qutu[3].style.width="200px";
    Qutu[0].style.height="200px";
    Qutu[1].style.height="200px";
    Qutu[2].style.height="200px";
    Qutu[3].style.height="200px";
    console.log(Qutu)
}