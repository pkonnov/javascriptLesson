// function ch(){
//   var chbox;
//   chbox = document.getElementById('one');
//
//   if (chbox.checked) {
//     alert('selected');
//   } else {
//     alert('not selected');
//   }
//
// }


function fun2() {
  var radi = document.getElementsByName('r1'); //Elements
  for (var i = 0; i < radi.length; i++){ //от нуля до длины мссива, количество инпутов
    if (radi[i].checked) {
      alert('selected ' + i + ' elements');
    }
  }
}
