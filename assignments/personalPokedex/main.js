$(document).ready(function() {

	// define the trainer class
	class Trainer {
		constructor(name, lvl, exp) {
			this.name = name;
			this.lvl = lvl;
			this.exp = exp;
			this.myPokemon = [];
		}
		
		// method that takes no parameters and returns an array of pokemon objects
		all() {
			return this.myPokemon;
		}
		// method that takes a parameter and returns a pokemon object housing info for the pokemon it finds
		get(name) {
			for (let i = 0; i < this.myPokemon.length; i++){
	 			let pokemonName = this.myPokemon[i].name;
	 			console.log(this.myPokemon[i]);
	 			if(pokemonName == name) {
	 				return this.myPokemon[i];
 				}
			}
			return false;
		}


	}



	// define the pokemon class
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
	}




	
	// create a function that takes the pokemon name and id# to call api
	function loadInfo(name, id) {
		// get API data
		


		// axios.get('https://pokeapi.co/api/v2/pokemon/' + id + '/')


		axios.get('https://raw.githubusercontent.com/silverdragonia/nycda_sei_apr_2018/master/assignments/personalPokedex/' + id + '.json')

 


		// once loaded then run function
		.then(function(result) {
			//define object of info for pokemon
			console.log(result);
			let info = {
				'name': result.data.name,
				'id': result.data.id,
				'img': result.data.sprites.front_shiny,
				'hp': result.data.stats[5].base_stat,
				'attack': result.data.stats[4].base_stat,
				'defense': result.data.stats[3].base_stat,
				'abilities': result.data.stats
			}
			
			silverdragonia.myPokemon.push(info);
		

		});

	}


	

	// define new trainer
	let silverdragonia = new Trainer('silverdragonia', 10, 9000);

	// define new pokemon
	let bulbasaur = new Pokemon('bulbasaur', 1);
	let charmander = new Pokemon('charmander', 4);
	let squirtle = new Pokemon('squirtle', 7);
	
	// call function to get data for pokemon and push to trainer object
	loadInfo(bulbasaur,1);
	loadInfo(charmander,4);
	loadInfo(squirtle,7);




	// define html elements
	let name = $('#pokemonName');
	let hp = $('#hp');
	let attack = $('#attack');
	let defense = $('#defense');
	let abilities = $('#abilities');
	let img = $('#img');

	let bulbasaurBtn = $('#bulbasaurBtn');
	let charmanderBtn = $('#charmanderBtn');
	let squirtleBtn = $('#squirtleBtn');

	let previousButton = $('#previousButton');
	let nextButton = $('#nextButton');



	bulbasaurBtn.click(function() {
		console.log('YOU SUCK');
		let myPoke = silverdragonia.get('bulbasaur');
		console.log(myPoke);
		name.text(myPoke.name);
		hp.text(myPoke.hp);
		attack.text(myPoke.attack);
		defense.text(myPoke.defense);

	});
	charmanderBtn.click(function() {
		
	});
	squirtleBtn.click(function() {
		
	});









	// check if previous button has been clicked

	previousButton.click(function() {
		name.text(silverdragonia.myPokemon.name);
		//load previous pokemon info:
		// name.text(pokemon.getName);
		// img.src(pokemon.getImg);
		// hp.text(pokemon.getHp);
		// attack.test(pokemon.getAttack);
		// defense.text(pokemon.getDefense);
		// abilities.push(pokemon.getAbilities);
	});

	
	// check if next button has been clicked
	nextButton.click( function() {
		//load next pokemon
	});



});
