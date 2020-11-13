import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  counterValue: number = 0;
  
  @Output('C') counterChange= new EventEmitter();
  
  inc() {

    this.counterValue++;
    this.counterChange.emit({ value: this.counterValue });
  }
  dec() {
 
    
    this.counterValue--;
    this.counterChange.emit({ value: this.counterValue });
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}
