import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'CONTADO APP';
  numero: number = 10

  sumar = ()=>{
    this.numero = this.numero + 1;
  }

  restar = ()=>{
    this.numero -= 1;
  }

  acumular = (valor: number)=>{
    this.numero += valor;
  }
}
