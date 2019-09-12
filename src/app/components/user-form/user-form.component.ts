import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { Router,ActivatedRoute } from '@angular/router'

import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

    @HostBinding('class') classes ='row';

    user: User = {
    id: 0,
    userName :'',
    firstName:'',
    lastName:'',
    age:0,
    lastSessionDateTime: new Date()
  };

  edit : boolean = false;

  constructor(private userservices:UsersService, private router:Router, private activedroute:ActivatedRoute) { }
  
  saveNewUser(){
      this.userservices.saveUser(this.user)
      .subscribe
      (
        res =>{
          console.log(res);
          this.router.navigate(['/users'])
        },
        err => console.error(err)
      )
    }
    updateUser(){
      this.userservices.updateUser(this.user.id,this.user)
      .subscribe(
        res=> {
          console.log(res);
          this.router.navigate(['/users'])
        },
        err => console.log(err) 
      )
          }
  ngOnInit(){
    const params = this.activedroute.snapshot.params;
    if (params.id){
      this.userservices.getUser(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.user = res;
          this.edit = true;
        },
        err => console.log(err)
      )
    }
    }

}
