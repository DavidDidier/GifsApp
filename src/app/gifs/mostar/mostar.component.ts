import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-mostar',
  templateUrl: './mostar.component.html',
  styles: [
  ]
})
export class MostarComponent {

  get results(){
    return this.gifsService.result;
  }

  constructor ( private gifsService : GifsService ) {}

}
