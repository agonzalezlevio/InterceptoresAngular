import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }


  public obtenerUsuarios() {
      // Parámetros
      let params = new HttpParams();
      params = params.append('page', '2');

      // Headers
      /* const headers = new HttpHeaders({
      'x-token-usuario': 'ADS65ADAD6AD5AS6DAD5AS6DA'
      }); */


      return this.http.get(`https://reqres.in/api/users`, { params }).pipe(
        // Filtrar la información
        map( (res: any) => {
          return res.data;
        }),
        // Errores
        catchError( this.manejaError )
        );
  }


  public manejaError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.warn(error);
    return throwError('Error personalizado');
  }

}


