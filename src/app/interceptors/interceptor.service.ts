import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor {


  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Paso por el interceptor');

    // Headers
    const headers = new HttpHeaders({
    'x-token-usuario': 'ADS65ADAD6AD5AS6DAD5AS6DA'
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejaError)
    );
  }


  public manejaError(error: HttpErrorResponse) {
    console.log('Sucedió un error');
    console.warn(error);
    return throwError('Error personalizado');
  }

}
