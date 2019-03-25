import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // this.route.params.subscribe(params => {
    //   this.userID = params['userid'];
    // });

  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["users"])
  }
}
