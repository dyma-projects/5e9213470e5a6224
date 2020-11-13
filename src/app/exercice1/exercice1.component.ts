import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

@Input() public compteur: number = 0;
  constructor() { }

  ngOnInit() {
  }
  ValeurChange(event) {
     this.compteur = event.value;
}

}
