import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
  charactersApi = 'https://hp-api.herokuapp.com/api/characters';
  fetchCharacters = () => fetch(this.charactersApi)
  .then(response => response.json())
}
