function one(){
	return 9
}
//console.log(5+one())

summa = (a,b) => {
	var c = 50 // local
	d = 60 // global
	a = a || 10 //undefined or 10
	b = b || 20
	return (a+b)
}

// document.getElementById('b1').onclick = summa(15,15)
document.getElementById('b1').onclick = function () {
	console.log(summa(15,10))
}

var d = function(){
	alert('work')
}
d()