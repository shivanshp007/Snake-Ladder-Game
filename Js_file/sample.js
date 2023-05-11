

const bttn = this.document.getElementById("bttn")
bttn.addEventListener("click", store);

function store()
{
  let str = this.document.getElementById('text').value;
  localStorage.setItem("storageName", str);
  document.getElementById('yrname').innerText = `Good Luck${str}`;

}

let uservalue=0;
	let dice;
while(True)
{


function Roll()
{
  dice = Math.floor(Math.random()*6)+1;
  uservalue += dice ;
}

function ladder()
{           //if(uservalue<=100) {  

//  if(uservalue===1 || uservalue===4 || uservalue===9 || uservalue===21 || uservalue===28 || uservalue===51 || uservalue===72 || uservalue===80)  //{
switch(uservalue)
{
 case 1:  uservalue = 38;
	break;
 case 4:  uservalue =14;
	break;
 case 9:  uservalue =31;
	break;
 case 21: uservalue =42;
	break;
 case 28: uservalue =84;
	break;
 case 51: uservalue =67;
	break;
 case 72: uservalue =91;
	break; 
default : uservalue =99;
	break; 
}
}
// uservalue += dice;


function snake()
{
 // if(uservalue===17 || uservalue===54 || uservalue===62 || uservalue===64 || uservalue===87 || uservalue===93 || uservalue===95 || uservalue===98)
	//{
	switch(uservalue)
	{
	 case 17: uservalue = 7;
		break;
 	case 54: uservalue =34;
		break;
 	case 62: uservalue =19;
		break;
 	case 64: uservalue =60;
		break;
 	case 87: uservalue =36;
		break;
 	case 93: uservalue =73;
		break;
 	case 95: uservalue =75;
		break; 
	default : uservalue =79;
  	break; 
	 }
}
	 // uservalue += dice;
   if(uservalue<=100)
   {
      if(uservalue===1 || uservalue===4 || uservalue===9 || uservalue===21 || uservalue===28 || uservalue===51 || uservalue===72 || uservalue===80) 
   {
    ladder();
   }

   else
   {
    if(uservalue===17 || uservalue===54 || uservalue===62 || uservalue===64 || uservalue===87 || uservalue===93 || uservalue===95 || uservalue===98)
   {
    snake();
   }
   else
   {
    if(uservalue === 100)
   {
    console.log(alert(" Congratulation You won the game"))
   }
    else
   {
    uservalue += dice;
   }
   }
  }
}
 else
   {
    uservalue = uservalue - dice;
   }
  
  }






  //gpt

  
let uservalue = 0;
let dice;

function roll() {
  dice = Math.floor(Math.random()*6)+1;
  if (uservalue + dice <= 100) {
    uservalue += dice;
  }
  checkPosition();
}

function ladder() {
  switch (uservalue) {
    case 1:  
      uservalue = 38;
      break;
    case 4:  
      uservalue = 14;
      break;
    case 9:  
      uservalue = 31;
      break;
    case 21: 
      uservalue = 42;
      break;
    case 28: 
      uservalue = 84;
      break;
    case 51: 
      uservalue = 67;
      break;
    case 72: 
      uservalue = 91;
      break; 
    default: 
      uservalue = 99;
      break; 
  }
}

function snake() {
  switch (uservalue) {
    case 17: 
      uservalue = 7;
      break;
    case 54: 
      uservalue = 34;
      break;
    case 62: 
      uservalue = 19;
      break;
    case 64: 
      uservalue = 60;
      break;
    case 87: 
      uservalue = 36;
      break;
    case 93: 
      uservalue = 73;
      break;
    case 95: 
      uservalue = 75;
      break; 
    default: 
      uservalue = 79;
      break; 
  }
}

function checkPosition() {
  if (uservalue === 1 || uservalue === 4 || uservalue === 9 || uservalue === 21 || uservalue === 28 || uservalue === 51 || uservalue === 72 || uservalue === 80) {
    ladder();
  } else if (uservalue === 17 || uservalue === 54 || uservalue === 62 || uservalue === 64 || uservalue === 87 || uservalue === 93 || uservalue === 95 || uservalue === 98) {
    snake();
  } else {
    if (uservalue === 100) {
      alert("Congratulations! You won the game.");
    }
  }
}

