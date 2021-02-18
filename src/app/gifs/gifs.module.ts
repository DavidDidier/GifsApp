import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostarComponent } from './mostar/mostar.component';
import { GifPageComponent } from './gif-page/gif-page.component';
import { BuscarComponent } from './buscar/buscar.component';



@NgModule({
  declarations: [
    MostarComponent, 
    GifPageComponent, 
    BuscarComponent
  ],
  exports: [
    GifPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
