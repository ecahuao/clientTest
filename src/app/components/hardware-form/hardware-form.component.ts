import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Hardware } from '../../models/Hardware'
import { HardwareService } from  '../../services/hardware.service'

@Component({
  selector: 'app-hardware-form',
  templateUrl: './hardware-form.component.html',
  styleUrls: ['./hardware-form.component.css']
})
export class HardwareFormComponent implements OnInit {

  @HostBinding('class') classes ='row';

  hardware: Hardware = {
    hardwareId:0,
    hardwareName :''
    };
    edit : boolean = false;
    
  constructor( private hardwareservice : HardwareService,
    private router:Router, 
    private activedroute:ActivatedRoute) { }

    saveNewHardware(){
      this.hardwareservice.saveHardware(this.hardware)
      .subscribe
      (
        res =>{
          console.log(res);
          this.router.navigate(['/hardware'])
        },
        err => console.error(err)
      )
    }
    updateHardware(){
      this.hardwareservice.updateHardware(this.hardware.hardwareId,this.hardware)
      .subscribe(
        res=> {
          console.log(res);
          this.router.navigate(['/hardware'])
        },
        err => console.log(err) 
      )
          }

  ngOnInit() {
    const params = this.activedroute.snapshot.params;
    if (params.id){
      this.hardwareservice.getHardware(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.hardware = res;
          this.edit = true;
        },
        err => console.log(err)
      )
  }
  }
}
