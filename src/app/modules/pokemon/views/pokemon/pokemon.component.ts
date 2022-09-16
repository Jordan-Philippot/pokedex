import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonDetails } from 'src/app/model/ipokemon-details';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})


export class PokemonComponent implements OnInit {

  public id: string | null = this.route.snapshot.paramMap.get('id');
  IPokemonDetails?: IPokemonDetails;


  constructor(private route: ActivatedRoute, private pokedexService: PokedexService) { }

  ngOnInit(): void {

    this.getPokemon()
  }
  getPokemon(): void {
    console.log(this.id)
    this.pokedexService.getPokemon(this.id)
      .subscribe(response => {
      
        console.log(response);
        this.IPokemonDetails = response
      });
  }


}
