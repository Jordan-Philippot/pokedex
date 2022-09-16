import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { IResults } from './model/iresults';
import { IPokemonDetails } from './model/ipokemon-details';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private pokedexUri = 'https://pokeapi.co/api/v2/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }


  /** GET pokedex from the server */
  public getPokemons(): Observable<IResults> {
    return this.httpClient.get<IResults>(`${this.pokedexUri}pokemon/`)
  }

  public getPokemon(id: string | null): Observable<IPokemonDetails> {
    return this.httpClient.get<IPokemonDetails>(`${this.pokedexUri}pokemon/${id}/`)
  }




  public searchPokemons(term: string): Observable<IPokemonDetails> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.httpClient.get<IPokemonDetails>(`${this.pokedexUri}pokemon/${term}/`);
  }
}
