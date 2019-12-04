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

      return this.http.get(`https://reqres.in/api/users`, { params }).pipe(
        // Filtrar la información
        map( (res: any) => {
          return res.data;
        })
        );
  }

}


