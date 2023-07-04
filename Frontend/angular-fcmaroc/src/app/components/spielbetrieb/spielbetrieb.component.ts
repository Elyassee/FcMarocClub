import { Component, OnInit } from '@angular/core';

declare var BFVWidget: any;

@Component({
  selector: 'app-spielbetrieb',
  templateUrl: './spielbetrieb.component.html',
  styleUrls: ['./spielbetrieb.component.css']
})
export class SpielbetriebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(): void {
    BFVWidget.HTML5.zeigeWettbewerbsTabelle("02IHAG8MS400002QVS5489B4VUIHV7I0-G", "bfv1688498820980", { height: "600",  width: "300" , colorResults: "undefined" , colorNav: "rgb(0,0,0)" , colorClubName : "rgb(0,0,0)" , backgroundNav: "rgb(255,255,255)"});
  }
}
