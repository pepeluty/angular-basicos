import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  constructor() { 
    console.log('constructor')
  }

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  borrarHeroe= ()=>{
    
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
