import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) { }
  ngOnInit() {
    this.getPokemons();
  }
  getPokemons() {
    this.pokemonService.fetchCharacters()
      .then(data => {
        data.results.map(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemon => {
              this.pokemons.push(pokemon);
            })
        })
      });
  }
}

// getPokemons() {
//   this.pokemonService.fetchCharacters()
//   .then(data => {
//     console.log(data.results.length);
//     return this.pokemons=
//     data.results;
//   });
// }