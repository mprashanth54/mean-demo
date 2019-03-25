import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserViewComponent
  },
  {
    path: 'forms',
    component: FormsExampleComponent
  },
  {
    path: 'products/add',
    component: ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
