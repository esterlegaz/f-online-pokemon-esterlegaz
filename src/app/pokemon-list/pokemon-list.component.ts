import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }
  getPokemons() {
    console.log('Funciono');
    this.pokemonService.fetchCharacters()
    .then(data => {
      return this.pokemons=
      data;
    })
  }
}

//esto sí funciona puesto en vez de pokemons: Pokemon[]
// pokemons: Pokemon[] = [{
//   gender: 'woman',
//   name: 'Bla'
// },
// {
//   gender: 'man',
//   name: 'Ble'
// }];