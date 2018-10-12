// function pow2(){
//   var number = document.getElementById('inp1').value;
//   var numberS = number*number;
//   alert(numberS)
// }

// var prim, num;
// let prim2;
// prim = 12;
// prim = 'hello';
// num = 50;
// prim2 = 6/1;
// alert(prim2 - 6);


// out = () => {
//   var p;
//   p= document.getElementById('out');
//   // p.innerHTML = '';
//   // дописать информацию не удаляя 
//   // p.innerHTML = p.innerHTML + ' hello';
//   // p.innerHTML += ' hello';
//   // p.insertAdjacentHTML('beforeBegin','Hi');
//   //p.insertAdjacentHTML('beforeEnd',' Hi');
//   p.outerHTML = '<div class="one">hello</div>';
// }


//part7
// f1 = () => {
//   var n,p;
//   n = document.getElementById('num1').value;
//   p = document.getElementById('out');
//   n = parseInt(n); // be converted into a number
//   if (n == 100) {
//     p.innerHTML = 'the Number is 100';// not explorer
//   }
//   else if (n < 100){
//     p.innerHTML = 'the number is less than 100';
//   }
//   else{
//     p.innerHTML = 'the number is greater than 100';
//   }
// }

//part8 

// var prNum, tempOut;

// prNum = Math.floor((Math.random() * 10) + 1);
// tempOut = document.getElementById('temp-out');
// tempOut.innerHTML = prNum;

// f1 = () => {
//   var num, out;

//   prNum = Math.floor((Math.random() * 10) + 1);
//   tempOut = document.getElementById('temp-out');
//   tempOut.innerHTML = prNum;
//   num = document.getElementById('mynum').value;
//   out = document.getElementById('out');

//   if (num == prNum) {
//     out.innerHTML = 'you guessed it';
//   } else if (num > prNum){
//     out.innerHTML = 'you entered a number greater than specified';
//   } else {
//     out.innerHTML = 'you entered a number less than specified';
//   }

// }

//part9 for

// f1 = () => {
//   var p
//   p = document.getElementById('out')

//   // с заданным кол-вом повторений

//   for (var i=0; i < 100; i++){
//     //p.append(i, '\n')
//     p.innerHTML += i + ' '
//   }
// }

//part14

// var p = document.getElementsByTagName('p');
// var one = document.getElementsByClassName('one');
// console.log(p)
// for (var i=0; i<p.length;i++){
// 	p[i].onclick = f1;
// }

// for (var i=0; i<one.length;i++){
// 	one[i].onclick = f2;
// }

// function f1(){
// 	console.log(this);
// }

// function f2() {
// 		this.style.fontWeight = 'bold'
// }	

// console.log()


//part15

var radio = document.getElementsByName('prim');

for (var i=0; i<radio.length; i++){
	radio[i].onchange = testRadio;
}


function testRadio(){
	console.log(this.value)
}

document.getElementById('one').onclick = checkRadio;

function checkRadio(){
	var m = document.getElementsByName('prim')
	for ( var i =0; i < m.length; i++ ){
		if ( m[i].checked ) {
			alert( m[i].value );
			break;
		}
	}
}