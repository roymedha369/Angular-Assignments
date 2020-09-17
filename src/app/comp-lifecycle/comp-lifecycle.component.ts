import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-lifecycle',
  templateUrl: './comp-lifecycle.component.html',
  styleUrls: ['./comp-lifecycle.component.css']
})
export class CompLifecycleComponent implements OnInit {

  data : string;

  constructor() { }

  ngOnInit(): void {
  }

}
