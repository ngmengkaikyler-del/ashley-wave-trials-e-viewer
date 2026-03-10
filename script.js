async function loadLevel() {

 const res = await fetch("level.json");
 const level = await res.json();

 const canvas = document.getElementById("levelCanvas");
 const ctx = canvas.getContext("2d");

 ctx.clearRect(0,0,canvas.width,canvas.height);

 level.objects.forEach(o => {

  if(o.type === "block"){
    ctx.fillStyle = "white";
    ctx.fillRect(o.x, 400-o.y, 40, 40);
  }

  if(o.type === "spike"){
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(o.x,400-o.y);
    ctx.lineTo(o.x+20,360-o.y);
    ctx.lineTo(o.x+40,400-o.y);
    ctx.closePath();
    ctx.fill();
  }

  if(o.type === "saw"){
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(o.x,400-o.y,20,0,Math.PI*2);
    ctx.fill();
  }

 });

}
