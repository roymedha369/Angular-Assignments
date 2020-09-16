import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() currentData : string ;
  previousData : string ;

  ngOnChanges(changes){
    this.previousData = (changes.currentData.previousValue);
  }

}
