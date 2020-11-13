import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  @ViewChild('V') public el: ElementRef;
  public valeur: string;


  constructor() { }

  ngOnInit() {
  }

  MyFunction() {
   // console.log(this.el)
    //console.log(this.el.nativeElement)
    //console.log(this.el.nativeElement.value)
    
    this.valeur =  this.el.nativeElement.value
    
    
  }

}
