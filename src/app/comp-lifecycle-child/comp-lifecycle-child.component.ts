import { Component,  OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comp-lifecycle-child',
  templateUrl: './comp-lifecycle-child.component.html',
  styleUrls: ['./comp-lifecycle-child.component.css']
})
export class CompLifecycleChildComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() currentData : string ;
  previousData : string ;

  ngOnChanges(changes){
    this.previousData = (changes.currentData.previousValue);
  }
}
