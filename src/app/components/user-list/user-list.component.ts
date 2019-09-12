import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any  = []
  constructor(private userservice:UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.userservice.getUsers().subscribe(
      res => {this.users = res;
      },
      err => console.log(err)
    )
  }
  deleteUser(id:number){
    this.userservice.deleteUser(id)
    .subscribe(
      res=> {
        console.log(res);
        this.getUsers();
      },
      err=> console.log(err)
    )
  }
  editGame(id:number){
    console.log(id);
  }
}
