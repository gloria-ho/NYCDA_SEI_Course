// let hp = querySelector('#hp');


// $.ajax({url: "https://pokeapi.co/api/v2/pokemon/1/", success: function(result){
//             console.log(result);
//             console.log(result.stats[5].base_stat);
// }});


class Pokemon {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.hp = 0;
		this.attack = 0;
		this.defense = 0;
		this.abilities = [];

		let loadPromise = axios.get('https://pokeapi.co/api/v2/pokemon/' + this.id + '/')
		.then(function(result) {

			console.log(result.data.stats[5].base_stat);
		});


		// .then(function(result) {
		// 	console.log(result);
		// 	console.log(this);
			// this.loadData(result);
		// });

		// $.ajax({url: 'https://pokeapi.co/api/v2/pokemon/' + this.id + '/', success: function(data) {
		// 	this.hp = data.stats[5].base_stat;
		// 	this.attack = data.stats[4].base_stat;
		// 	this.defense = data.stats[3].base_stat;
		// 	console.log(this.hp);
			// for (let i = 0; i < data.abilities.length; i++) {
			// 	this.abilities.push(data.abilities[i].ability.name)
			// }
		// }});
	}

	loadData(data) {
		// console.log(data)
		// console.log(this);
		// console.log();
		// this.hp = data.data.stats[5].base_stat;
		// this.attack = data.stats[4].base_stat;
		// this.defense = data.stats[3].base_stat;

		// for (let i = 0; i < data.abilities.length; i++) {
		// 	this.abilities.push(data.abilities[i].ability.name);
		// }

		// console.log('this should print too ' + this.hp);
		// console.log(this.hp, this.attack);
	}


	loadAbilities(abilitiesArray) {

	}

	getHp() {
		return this.hp;
	}
	getAttack() {
		return this.attack;
	}
	getDefense() {
		return this.defense;
	}
	getAbilities() {
		// arr of abilities
	}

};


let bulbasaur = new Pokemon('bulbasaur', 1);
// let charmander = new Pokemon('charmander');
// let squirtle = new Pokemon('squirtle');



console.log(bulbasaur.getHp());

