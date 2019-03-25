import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statscard',
  templateUrl: './statscard.component.html',
  styleUrls: ['./statscard.component.css']
})
export class StatscardComponent implements OnInit {
  @Input() count = 0;
  @Input() title = '';
  @Input() iconClass = '';
  @Input() color = 'black';
  constructor() { }

  ngOnInit() {
  }

  getStyle() {
    return {
      'font-size': '56px',
      'color': this.color
    }
  }

}
