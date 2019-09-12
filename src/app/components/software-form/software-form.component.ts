import { Component, OnInit, HostBinding } from '@angular/core';
import { Software } from '../../models/Software';
import { Router, ActivatedRoute } from '@angular/router'

import { SoftwareService } from 'src/app/services/software.service';

@Component({
  selector: 'app-software-form',
  templateUrl: './software-form.component.html',
  styleUrls: ['./software-form.component.css']
})
export class SoftwareFormComponent implements OnInit {

  @HostBinding('class') classes ='row';

software: Software = {
  softwareId:0,
  softwareName :''
  };
  edit : boolean = false;

  constructor(private softwareservices:SoftwareService,
     private router:Router, 
     private activedroute:ActivatedRoute) { }

  saveNewSoftware(){
      this.softwareservices.saveSoftware(this.software)
      .subscribe
      (
        res =>{
          console.log(res);
          this.router.navigate(['/software'])
        },
        err => console.error(err)
      )
    }
    updateSoftware(){
      this.softwareservices.updateSoftware(this.software.softwareId,this.software)
      .subscribe(
        res=> {
          console.log(res);
          this.router.navigate(['/software'])
        },
        err => console.log(err) 
      )
          }

  ngOnInit() {
    const params = this.activedroute.snapshot.params;
    if (params.id){
      this.softwareservices.getSoftware(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.software = res;
          this.edit = true;
        },
        err => console.log(err)
      )
  }
  }
}
