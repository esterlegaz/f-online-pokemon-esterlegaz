import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  ENDPOINT = 'https://pokeapi.co/api/v2/pokemon?limit=25';
  fetchCharacters = () => fetch(this.ENDPOINT)
  .then(response => response.json())
}
