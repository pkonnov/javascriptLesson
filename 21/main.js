let block = document.getElementById('one');
// click mouse
// block.onclick = function (){
// 	this.style.background = 'green';
// 	this.onclick = null;
// }

// doubleclick
// block.ondblclick = function(){
// 	this.style.background = 'red';
// }

// click right mouse
block.oncontextmenu = function(){
	this.style.background = 'black';
	return false; // without this will cause the browser context
}

// off context menu in the browser
document.oncontextmenu = function(){
	return false;
}

// hover
block.onmouseenter = function(){
	console.log('in!!!');
	this.style.background = 'gold';
}

// the mouse leaves the element
block.onmouseleave = function(){
	this.style.background = 'blue';
}

// mouse move
let a = 0;
// block.onmousemove = function(){
// 	a++;
// 	this.style.width = 100 + a + 'px';
// }

// press and keep the mouse button (any)
block.onmousedown = function(event){
	this.style.background = 'cyan';
	console.log('button:' + event.button);
	console.log('button:' + event.which);
}

// occurs when the user releases the mouse from the element
block.onmouseup = function(){
	this.style.background = 'pink';
}