import { Component, OnInit } from '@angular/core';
import { SoftwareService } from '../../services/software.service'

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {

  softwares:any  = []
  constructor(private softwareservice: SoftwareService) { }

  ngOnInit() {
    this.getSoftwares();
  }
  getSoftwares(){
    this.softwareservice.getSoftwares().subscribe(
      res => {this.softwares = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  deleteSoftware(id:number){
    console.log(id);
    this.softwareservice.deleteSoftware(id)
      .subscribe(
        res=> {
          console.log(res);
          this.getSoftwares();
        },
        err=> console.log(err)
      )
    }
  }
