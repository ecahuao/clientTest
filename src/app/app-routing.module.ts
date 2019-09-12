import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SoftwareListComponent } from './components/software-list/software-list.component'
import { SoftwareFormComponent } from './components/software-form/software-form.component'
import { HardwareListComponent } from './components/hardware-list/hardware-list.component'
import { HardwareFormComponent } from './components/hardware-form/hardware-form.component'
import { SoftuserComponent } from './components/softuser/softuser.component'

const routes: Routes = [
  {
    path:'',
    redirectTo :'/users',
    pathMatch :'full'
  },
  {
    path:'users',
    component: UserListComponent
  },
  {
    path :'users/add',
    component:UserFormComponent
  },
  {
    path:'user/edit/:id',
    component:UserFormComponent
  },
  {
    path:'software',
    component:SoftwareListComponent
  },
  {
    path :'software/add',
    component:SoftwareFormComponent
  },
  {
    path:'software/edit/:id',
    component:SoftwareFormComponent
  },
  {
    path:'hardware',
    component:HardwareListComponent
  },
  {
    path:'hardware/edit/:id',
    component:HardwareFormComponent
  },
  {
    path :'hardware/add',
    component:HardwareFormComponent
  },
  {
    path :'softuser',
    component:SoftuserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
