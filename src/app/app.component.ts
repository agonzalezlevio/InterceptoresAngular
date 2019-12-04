import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor( private usuarioService: UsuarioService) {
    this.usuarioService.obtenerUsuarios().subscribe( resp => {
      console.log(resp);
    }, (respError) => {
      console.log(respError)
    });
  }

}
