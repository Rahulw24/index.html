//Button to Restart game 
var restart=document.querySelector("#b");
restart.addEventListener("click",clear)
//grabs all Squares
d=document.querySelectorAll("td");

//clear all the Squares
function clear() {
  for (var i = 0; i < d.length; i++) {
    d[i].textContent=" ";
  }
  move=0;
}

var move=0;
//check the square marker
function check( )
{
if(this.textContent!==' ')
{
  alert('invalid move');
}
else if(move){
  this.textContent='O';
  move=0;
}
else{
  this.textContent='X';
  move=1;
}
check_winner();
}

function check_winner()
{
  for(var i=0;i<3;i++){
  if(d[i].textContent==='X'&&d[i+3].textContent=='X'&&d[i+6].textContent=='X')
  {
    alert('X wins');
    clear();
  }
  if(d[i].textContent==='O'&&d[i+3].textContent=='O'&&d[i+6].textContent=='O')
  {
    alert('O wins');
    clear();
  }
  if(d[i*3].textContent==='X'&&d[i*3+1].textContent=='X'&&d[i*3+2].textContent=='X')
  {
    alert('X wins');
    clear();
  }
  if(d[i*3].textContent==='O'&&d[i*3+1].textContent=='O'&&d[i*3+2].textContent=='O')
  {
    alert('O wins');
    clear();
  }
}
if(d[0].textContent==='X'&&d[4].textContent=='X'&&d[8].textContent=='X')
{
  alert('X wins');
  clear();
}
if(d[0].textContent==='O'&&d[4].textContent=='O'&&d[8].textContent=='O')
{
  alert('O wins');
  clear();
}
if(d[2].textContent==='X'&&d[4].textContent=='X'&&d[6].textContent=='X')
{
  alert('X wins');
  clear();
}
if(d[2].textContent==='O'&&d[4].textContent=='O'&&d[6].textContent=='O')
{
  alert('O wins');
  clear();
}
}
//for loop to add event listeners to all the squares
for (var i = 0; i < 9; i++) {
  d[i].addEventListener("click",check)
}
