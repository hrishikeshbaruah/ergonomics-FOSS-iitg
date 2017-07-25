
	var c = document.getElementById("last");
	c.width  = c.scrollWidth;
    c.height = c.scrollHeight;
	
	var context = c.getContext('2d');
	var mouseXi=0;
	var mouseYi=0;
	
	var dxi=0;
	var dyi=0;
	var xi=200;
	var yi=200;
	var disti=0;
	var radii=40;
	context.fillStyle='blue';
	context.font="bold 30px sans-serif";
	context.fillText("Check answer",110,70);
	
	context.fillStyle='green';
	context.beginPath();
	
	context.arc(xi, yi,radii,0,2 * Math.PI,false);
	context.fill();
	
	
	context.c.addEventListener('click',function(event){
	
			mouseXi=event.clientX - context.c.offsetLeft;
			mouseYi=event.clientY - context.c.offsetTop;
			
			dxi=mouseXi-xi;
			dyi=mouseYi-yi;
	
			disti=Math.sqrt((dxi*dxi)+(dyi*dyi));
			
			if(disti<radii)
			{
				alert("yes");
				context.fillStyle='white';
				context.fillRect(0,0,400,300);
				
			}
	
	
	});
	
	