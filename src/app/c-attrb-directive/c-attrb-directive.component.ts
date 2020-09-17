import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-attrb-directive',
  templateUrl: './c-attrb-directive.component.html',
  styleUrls: ['./c-attrb-directive.component.css']
})
export class CAttrbDirectiveComponent implements OnInit {

  clr:string;

  constructor() { }

  ngOnInit(): void {
  }

}
