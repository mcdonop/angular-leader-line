import { Component, VERSION, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {MatCardModule} from '@angular/material/card';

import 'leader-line';
declare let LeaderLine: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document){
  }

  line1: any;
  line2: any;

  ngOnInit() {

    let startElement1 = this.document.getElementById('card-1')
    let startElement2 = this.document.getElementById('card-2')
    let endElement99 = this.document.getElementById('card-99')
    this.line1 = new LeaderLine(startElement1, endElement99, 
      {dash: {animation: true},
      endPlug: "disc"
    });
   

    this.line2 = new LeaderLine(startElement2, endElement99, 
      {dash: {animation: true},
      endPlug: "disc"
    });
  }
 
  onMove1(e) {
    this.line1.position();
  }
  onMove2(e) {
    this.line2.position();
  }
  onMove99(e) {
    this.line1.position();
    this.line2.position();
  }
}