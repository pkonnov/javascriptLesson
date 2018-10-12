var goods = {
	"28366":{
		"name": "Banan",
		"cost": 30,
		"img": "https://cdn3.iconfinder.com/data/icons/unigrid-flat-fruits-vegetables/90/010_015_banana_banan_plant_herb_fruit_food-128.png",
		"sklad": "yes",

	},
	"345845":{
		"name": "Pomidor",
		"cost": 40,
		"img": "https://cdn3.iconfinder.com/data/icons/cosmo-color-vegetables/40/tomato_2-128.png",
		"sklad": "yes",

	},
	"345567":{
		"name": "Strawbery",
		"cost": 60,
		"img": "https://cdn4.iconfinder.com/data/icons/fruits-and-vegetables-21/64/Strawbery-128.png",
		"sklad": "yes",

	},
}

console.log(goods)
var out = '';
for(var key in goods){
	out += 'Название: '+ goods[key].name + '<br />';
	out += 'Цена: '+ goods[key].cost + '<br />';
	out += 'Наличие: '+ goods[key].sklad + '<br />';
	out += '<img src="'+goods[key].img+'">' + '<br />';
	out+='<hr>'
}
document.getElementById('out').innerHTML = out;