canvas=document.getElementById("myCanvas");

canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d"); 

ctx.beginPath(); 
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(135, 100, 535 ,300);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "BLUE"; 
ctx.lineWidth = 10; 
ctx.arc(222, 220, 70 ,0 , 2*Math.PI);
ctx.stroke();


ctx.beginPath(); 
ctx.strokeStyle = "Black";
ctx.lineWidth = 10;
ctx.arc(400, 220, 70 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle = "Red";
ctx.lineWidth = 10; 
ctx.arc(578, 220, 70 ,0 , 2*Math.PI); 
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green"; 
ctx.lineWidth = 10;
ctx.arc(493, 280, 70 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath(); 
ctx.strokeStyle ="orange";
ctx.lineWidth = 10;
ctx.arc(315, 280, 70 ,0 , 2*Math.PI);
ctx.stroke();