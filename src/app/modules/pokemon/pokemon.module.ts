import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    MaterialModule
  ]
})
export class PokemonModule { }
