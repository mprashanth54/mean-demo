import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { StatscardComponent } from './statscard/statscard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user-view/user-view.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageHeaderComponent,
    StatscardComponent,
    UserTableComponent,
    LoginComponent,
    UsersComponent,
    UserViewComponent,
    FormsExampleComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
