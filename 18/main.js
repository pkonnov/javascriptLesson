var man = {
	"name": "Pavel",
	"age": 25,
	"sex": "male",
	"id": "023323f"
}

var man2 = {
	"name": "Pavel",
	"age": 25,
	"sex": "male",
	"id": "023323f",
	"year":function (){
		return 2017 - this.age
	},

}

// console.log(man);
// console.log(man.name);
// console.log(man['name']);
// var a = 'name'
// console.log(man[a]);

// console.log(man2.year())

var m = {
	"mas": [5,6,34,12,45],
	"sum": function(){
		var sum = 0
		for (var i = 0; i<this.mas.length; i++){
			sum  = sum + this.mas[i]
		}
		return sum
	}
}

console.log(m.sum())