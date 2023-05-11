const bttn = document.getElementById("bttn");
bttn.addEventListener("click", store);

function store() 
{
  let y = document.getElementById('frontname').value;
  localStorage.setItem("storageName", y);
  console.log(y);
  document.getElementById('yrname').innerText = `Good Luck ${str}`;
  window.location.href="game.js"
}


