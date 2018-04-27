$(document).ready(function() {

	/*
	 * define the trainer class
	 */
	class Trainer {
		constructor(name, lvl, exp) {
			this.name = name;
			this.lvl = lvl;
			this.exp = exp;
			this.myPokemon = [];
		}
		printInfo() {
			console.log('printing within Trainer.printInfo', this.myPokemon);
		}
		// method that takes no parameters and returns an array of pokemon objects
		all() {
			return this.myPokemon;
		}
		// method that takes a parameter and returns a pokemon object housing info for the pokemon it finds
		get(name) {
			for(let i = 0; i < this.myPokemon.length; i++){
	 			let pokemonName = this.myPokemon[i].stats.name;
	 			if(pokemonName === name) {
	 				return this.myPokemon[i];
 				} else {
 				return 'error';
 				}
			// return this.myPokemon.indexOf(name);
			}
		}


	}
	/*
	 * define the pokemon class
	 */
	class Pokemon {
		constructor(name, id, img, hp, attack, defense, abilities) {
			this.name = name;
			this.id = id;
			this.img = img;
			this.hp = hp;
			this.attack = attack;
			this.defense = defense;
			this.abilities = abilities;
		}

		// loadStats() {
		// 	loadInfo(this.name, this.id);
		// 	console.log('test', this.attack);
		// }

	}
	// /class Pokemon


	/*
	 * create a function that takes the pokemon name and id# to call api ajax/axios
	 */
	function loadInfo(name, id) {
		// get API data
		axios.get('https://pokeapi.co/api/v2/pokemon/' + id + '/')
		// once loaded then run function
		.then(function(result) {
			//define object of info for pokemon
			let info = {
			'name': result.data.name,
			'id': result.data.id,
			'img': result.data.sprites.front_shiny,
			'hp': result.data.stats[5].base_stat,
			'attack': result.data.stats[4].base_stat,
			'defense': result.data.stats[3].base_stat,
			'abilities': result.data.stats
		}
			


			// silverdragonia.myPokemon.push(new Pokemon(info));

	

		});

	}


	
	/*
	 * define new trainer
	 */
	let silverdragonia = new Trainer('silverdragonia', 10, 9000);

	/*
	 * define new pokemon and pushes new pokemon to trainer array
	 */

	let bulbasaur = new Pokemon('bulbasaur', 1);
	// let charmander = new Pokemon('charmander', 4);
	// let squirtle = new Pokemon('squirtle', 7);

	loadInfo(bulbasaur,1);
	// loadInfo(charmander,4);
	// loadInfo(squirtle,7);



	console.log(silverdragonia);

















/*
	 * define html elements
	 */
	let name = $('#pokemonName');
	let hp = $('#hp');
	let attack = $('#attack');
	let defense = $('#defense');
	let abilities = $('#abilities');
	let img = $('#img');

	let previousButton = $('#previousButton');
	let nextButton = $('#nextButton');



	/*
	 * check if previous button has been clicked
	 */


	previousButton.click(function() {
		//load previous pokemon info:
		name.text(pokemon.getName());
		img.src(pokemon.getImg());
		hp.text(pokemon.getHp());
		attack.test(pokemon.getAttack());
		defense.text(pokemon.getDefense());
		abilities.push(pokemon.getAbilities());
	});

	/*
	 * check if next button has been clicked
	 */
	nextButton.click( function() {
		//load next pokemon
	});



});
