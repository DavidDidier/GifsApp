import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dataGifs, DataGifsApp } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial : string[] = [];
  private apiKey     : string   = 'UlT0CTUGbdyuC84s2YphDDHeJgxGN9i2';
  private apiUrl     : string   = 'https://api.giphy.com/v1/gifs';

  public result      : dataGifs[]    = [];

  get historial(){

    return [...this._historial];
  }

  constructor ( private http : HttpClient ) {

    this._historial = JSON.parse(localStorage.getItem( 'historial' )! ) || [];
    this.result     = JSON.parse(localStorage.getItem( 'resultadoss' )! ) || [];

  }
 

  buscarGifs( termino: string ){

    if(!this._historial.includes( termino )){

      this._historial.unshift( termino );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem( 'historial' , JSON.stringify( this._historial ));

    }

    const params = new HttpParams()
          .set('api_key' , this.apiKey)
          .set('q' , termino );

    this.http.get<DataGifsApp>(`${ this.apiUrl}/search` , { params })
        .subscribe( (respuesta) => {
          console.log( respuesta.data )
          this.result = respuesta.data;
          localStorage.setItem( 'resultadoss' , JSON.stringify( this.result ));
        });
  }
}