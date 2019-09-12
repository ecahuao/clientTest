import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../../services/hardware.service'

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {

  hardwares : any = []
  constructor( private hardwareservice : HardwareService) { }

  ngOnInit() {
    this.getHardwares()
  }
  getHardwares(){
    console.log("GetHardware")
    this.hardwareservice.getHardwares().subscribe(
      res => {this.hardwares = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
  deleteHardware(id:number){
    console.log(id);
    this.hardwareservice.deleteHardware(id)
      .subscribe(
        res=> {
          console.log(res);
          this.getHardwares();
        },
        err=> console.log(err)
      )
    }
}
