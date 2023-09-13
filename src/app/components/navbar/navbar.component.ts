import { Component } from '@angular/core';
import { IOptsNavbar } from 'src/app/interfaces/IOptsNavbar';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public tituloNav: string = 'Aplicacion Angular';

  public opciones: IOptsNavbar [] = [
    { path: '/home', name: 'Home'},
    { path: '/depositos', name: 'Depositos'},
    { path: '/prestamos', name: 'Prestamos'},
    { path: '/giros', name: 'Giros'},
    { path: '/cta-corriente', name: 'Cuenta Corriente'},
  ];
}
