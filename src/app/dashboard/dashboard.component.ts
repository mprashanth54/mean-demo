import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [
    {
      firstName: 'Mohana Priya',
      lastName: 'Manohar',
      email: 'monariya@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Priyanka',
      lastName: 'Chitti',
      email: 'priyanka@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Manisha',
      lastName: 'Akula',
      email: 'monariya@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Shruthi',
      lastName: 'Muthu',
      email: 'shruthimuthu@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Subba',
      lastName: 'Vellapandi',
      email: 'subbavellapandi@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Pradeep',
      lastName: 'Kumar',
      email: 'pradeepkumar@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Sukumar',
      lastName: 'Kuchana',
      email: 'sukumark@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Venkat',
      lastName: 'Puttamsetty',
      email: 'venkatsetty@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Jyothi',
      lastName: 'Saikam',
      email: 'jyoyhisaikam@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    },
    {
      firstName: 'Cinni',
      lastName: 'Thomas',
      email: 'cthomas@gmail.com',
      phone: '888300432',
      designation: 'Trainee'
    }
  ]

  tableHeaders = ["Sno", "First", "Last", "Email", "Phone", "Designation"]
  constructor() { }

  ngOnInit() {
  }

}
