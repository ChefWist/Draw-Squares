let board = document.getElementById("Board");
let context = board.getContext("2d");
let slider = document.getElementById("size");
let resetBtn = document.getElementById("reset");

board.width = 500;
board.height = 250;

resetBtn.addEventListener('click',function(event){
	context.clearRect(0,0,board.width,board.height);
})

board.addEventListener('click',function(event){
	mouse = {
		x:event.offsetX,
		y:event.offsetY
	}
	draw = {
		color: "black",
		width: slider.value,
		height: slider.value
	}
	context.fillStyle = draw.color;
	context.fillRect(mouse.x-(draw.width/2),mouse.y-(draw.height/2),draw.width,draw.height)
});