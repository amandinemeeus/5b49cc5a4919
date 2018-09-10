import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  nom: string;
  hello: string;

  constructor() {
    this.nom = '';
    this.hello = 'My string interpolation';
  }

  myEvent() {
    console.log('Evénement sur click');
  }

  ngOnInit() {
  }

}
