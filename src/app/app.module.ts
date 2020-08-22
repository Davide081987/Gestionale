import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { AuthService } from './shared/services/auth.service';
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './features/login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './features/navbar/navbar.component';
import { UsersComponent } from './features/users/users/users.component';
import { UsersTableComponent } from './features/users/users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserFormComponent } from './features/users/user-Form/user-form.component';

const components = [
  AppComponent,
  HomeComponent,
  LoginComponent,
  NavbarComponent,
  UsersComponent,
  UsersTableComponent,
  UserFormComponent,
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  FormsModule,
  FlexLayoutModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    dataEncapsulation: false,
    delay: 500,
  }),
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
