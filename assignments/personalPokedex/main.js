// $.ajax({url: "https://pokeapi.co/api/v2/pokemon/1/", success: function(result){
//             console.log(result);
//             console.log(result.stats[5].base_stat);
// }});

// All pokemon stored within a container object named after the trainer name
let silverdragonia = {};


class Pokemon {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.img = ''; // someURL
		this.hp = 1;
		this.attack = 2;
		this.defense = 3;
		this.abilities = ['a','b','c'];

		// let loadPromise = axios.get('https://pokeapi.co/api/v2/pokemon/' + this.id + '/')
		// .then(function(result) {

		// 	console.log(result.data.stats[5].base_stat);

		// });


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

	getName(){
		return this.name;
	}
	getImg() {
		return this.imgUrl;
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
		return this.abilities;
	}

};


let bulbasaur = new Pokemon('bulbasaur', 1);
let charmander = new Pokemon('charmander, 4');
let squirtle = new Pokemon('squirtle', 7);



let name = document.querySelector('#pokemonName');
let hp = document.querySelector('#hp');
let attack = document.querySelector('#attack');
let defense = document.querySelector('#defense');
let abilities = document.querySelector('#abilities');
let img = document.querySelector('#img');

let previousButton = document.querySelector('#previousButton');
let nextButton =document.querySelector('#nextButton');


previousButton.addEventListener('click', function() {
	//load previous pokemon info:
	name.innerText = pokemon.getName();
	img.src = pokemon.getImg();
	hp.innerText = pokemon.getHp();
	attack.innerText = pokemon.getAttack();
	defense.innerText = pokemon.getDefense();
	abilities.innerText = pokemon.getAbilities();
})



nextButton.addEventListener('click', function() {
	//load next pokemon
})



