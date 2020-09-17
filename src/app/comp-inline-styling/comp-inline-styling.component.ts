import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-inline-styling',
  templateUrl: './comp-inline-styling.component.html',
  styles: [`p { color:blue}`]
})
export class CompInlineStylingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
