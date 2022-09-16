import { Component, OnInit } from '@angular/core';
import { IPokedex } from 'src/app/model/ipokedex';
import { IPokemonDetails } from 'src/app/model/ipokemon-details';
import { IResults } from 'src/app/model/iresults';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokedex: IPokedex[] = [];
  pokemonDetails?: IPokemonDetails;


  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.getPokedex();
  }

  getPokedex(): void {
    this.pokedexService.getPokemons()
      .subscribe(response => {
        const pokemons = response.results.map(pokemon => pokemon);
        this.pokedex = pokemons
      });
  }
  clickme(pokeName: string): void {
    this.pokedexService.searchPokemons(pokeName)
      .subscribe(response => {
        console.log(response);
        this.pokemonDetails = response
      });
  }

}
