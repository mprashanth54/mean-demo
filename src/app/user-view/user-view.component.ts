import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
// var formatNumber = require('simple-format-number');
import * as formatNumber from 'simple-format-number'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })
  }

  ngOnInit() {
  }

  getID() {
    return formatNumber(this.id);
  }

}
