import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input() data = [];
  @Input() tableHeaders = [];
  constructor() { }

  ngOnInit() {
  }

  getKeys() {
    let firstData = this.data[0];
    return Object.keys(firstData);
  }
}
