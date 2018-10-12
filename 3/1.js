function fun0(){
  var trl = document.getElementById('rtl');
  var ttl = document.getElementById('ttl');

  var rtr = document.getElementById('rtr');
  var ttr = document.getElementById('ttr');

  var rbr = document.getElementById('rbr');
  var tbr = document.getElementById('tbr');

  var rbl = document.getElementById('rbl');
  var tbl = document.getElementById('tbl');

  var block = document.getElementById('block');

  ttl.value=rtl.value;
  ttr.value=rtr.value;
  tbr.value=rbr.value;
  tbl.value=rbl.value;

  block.style.borderRadius = rtl.value + 'px ' + rtr.value + 'px ' + rbr.value + 'px ' + rbl.value + 'px ';
}
