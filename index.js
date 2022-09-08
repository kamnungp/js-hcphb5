// Import stylesheets
import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
const myInput = document.getElementById('myInput');

async function main() {

 liff.ready.then(() => {


 })



  await liff.init({liffId:"1657383240-gXLrKyz8"});
}
myInput.addEventListener('change', draw);

main();

async  function draw(e) {
alert('test');
  var canvas = document.getElementById('idCanvas');
  var context = canvas.getContext('2d');
 
  var imageObj = new Image();
  

imageObj.onload = function() {
  context.drawImage(imageObj, 0, 0);
  context.font = "40px Calibri";
  context.fillStyle = "red";
  context.fillText("My TEXT!", 50, 100);
  
  var canvas = document.getElementById('idCanvas');
  var dataURL = canvas.toDataURL();

  alert(dataURL);
}
imageObj.setAttribute('crossOrigin', 'anonymous');
//imageObj.src = "https://www.melonsolution.com/images/card.jpeg";
};
