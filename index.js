const randomNumber1 = Math.floor(Math.random()*(6-1)+1)
console.log(randomNumber1)
if(randomNumber1===1){
  document.querySelectorAll("img")[0].setAttribute("src","dice1.png")
}else if(randomNumber1===2){
  document.querySelectorAll("img")[0].setAttribute("src","dice2.png")
}else if(randomNumber1===3){
  document.querySelectorAll("img")[0].setAttribute("src","dice3.png")
}else if(randomNumber1===4){
  document.querySelectorAll("img")[0].setAttribute("src","dice4.png")
}else if(randomNumber1===5){
  document.querySelectorAll("img")[0].setAttribute("src","dice5.png")
}else {
  document.querySelectorAll("img")[0].setAttribute("src","dice6.png")
}

const randomNumber2 = Math.floor(Math.random()*(6-1)+1)
console.log(randomNumber2)
if(randomNumber2===1){
  document.querySelectorAll("img")[1].setAttribute("src","dice1.png")
}else if(randomNumber2===2){
  document.querySelectorAll("img")[1].setAttribute("src","dice2.png")
}else if(randomNumber2===3){
  document.querySelectorAll("img")[1].setAttribute("src","dice3.png")
}else if(randomNumber2===4){
  document.querySelectorAll("img")[1].setAttribute("src","dice4.png")
}else if(randomNumber2===5){
  document.querySelectorAll("img")[1].setAttribute("src","dice5.png")
}else {
  document.querySelectorAll("img")[1].setAttribute("src","dice6.png")
}
// let document.querySelectorAll("fuck")=document.querySelectorAll("fuck");
if(randomNumber1>randomNumber2){
 document.getElementById("fuck").innerHTML="player1 wins"
}else if(randomNumber1===randomNumber2){
  document.getElementById("fuck").innerHTML="Its a draw!!!"
}else{
  document.getElementById("fuck").innerHTML="player2 wins"
}
