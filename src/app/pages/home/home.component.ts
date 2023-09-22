import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public title: string = 'Home';
  public headerTable: string [] = ['Saldo', 'Estado'];
  public saldo: number = 0;
  public estado: string = 'Sin Estado';
  public status: boolean = false;
  // tambien lo puedo hacer de la siguiente forma 
  //public status = false;

  opcionesBtnAumentar = {
    color: 'btn btn-success',
    titleBtn: 'Aumentas Saldo'
  }

  
  opcionesBtnDisminuir = {
    color: 'btn btn-danger',
    titleBtn: 'Disminuir Saldo'
  }

  opcionesBtnEstado = {
    color: 'btn btn-warning',
    titleBtn: 'Cambiar Estado'
  }

  constructor () {}

  public aumentarSaldo() {
    this.saldo += 1000;
  }

  public disminuirSaldo() {
    this.saldo -= 1000;
  }

  public cambiarEstado() {
    this.status = !this.status;
    this.estado = this.status? 'Activo': 'Inactivo';

  }

}
