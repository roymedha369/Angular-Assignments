import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-pipe',
  templateUrl: './c-pipe.component.html',
  styleUrls: ['./c-pipe.component.css']
})
export class CPipeComponent implements OnInit {

  sortOption : string = "rank";
  sortDesc : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  records : any = [
    {rank:1, name:"Batman",followers:1000},
    {rank:2, name:"Spiderman",followers:3000},
    {rank:3, name:"Ironman",followers:1500},   
]

}
