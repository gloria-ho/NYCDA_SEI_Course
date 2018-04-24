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

		console.log(this.abilities);

		$.ajax({url: 'https://pokeapi.co/api/v2/pokemon/' + this.id + '/', success: this.loadData
		});		
	}

	loadData(data) {
		this.hp = data.stats[5].base_stat;
		// this.attack = data.stats[4].base_stat;
		// this.defense = data.stats[3].base_stat;

		// for (let i = 0; i < data.abilities.length; i++) {
		// 	this.abilities.push(data.abilities[i].ability.name);
		// }

		console.log('this should print too ' + this.hp);
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


let bulbasaur = new Pokemon('baulbasaur', 1);
// let charmander = new Pokemon('charmander');
// let squirtle = new Pokemon('squirtle');

// PROBLEM : below console.log runs BEFORE loadData!! HP still = 0

console.log(bulbasaur);