let level;
let scrollX = 0;
let speed = 2;

async function loadLevel(){

 const res = await fetch("level.json");
 level = await res.json();

 requestAnimationFrame(draw);

}

function draw(){

 const canvas = document.getElementById("levelCanvas");
 const ctx = canvas.getContext("2d");

 ctx.clearRect(0,0,canvas.width,canvas.height);

 level.objects.forEach(o=>{

  let x = o.x - scrollX;

  if(o.type==="block"){
   ctx.fillStyle="white";
   ctx.fillRect(x,400-o.y,40,40);
  }

  if(o.type==="spike"){
   ctx.fillStyle="red";
   ctx.beginPath();
   ctx.moveTo(x,400-o.y);
   ctx.lineTo(x+20,360-o.y);
   ctx.lineTo(x+40,400-o.y);
   ctx.closePath();
   ctx.fill();
  }

  if(o.type==="saw"){
   ctx.fillStyle="pink";
   ctx.beginPath();
   ctx.arc(x,400-o.y,20,0,Math.PI*2);
   ctx.fill();
  }

 });

 scrollX += speed;

 requestAnimationFrame(draw);

}

loadLevel();
