import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SoftwareFormComponent } from './components/software-form/software-form.component';
import { SoftwareListComponent } from './components/software-list/software-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';


import { UsersService } from './services/users.service';
import { HardwareListComponent } from './components/hardware-list/hardware-list.component';
import { HardwareFormComponent } from './components/hardware-form/hardware-form.component';
import { SoftuserComponent } from './components/softuser/softuser.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SoftwareFormComponent,
    SoftwareListComponent,
    UserFormComponent,
    UserListComponent,
    HardwareListComponent,
    HardwareFormComponent,
    SoftuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ 
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
