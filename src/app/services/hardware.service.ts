import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Hardware } from '../../app/models/Hardware'

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  API_URI ='https://localhost:44345/api'

  constructor(private http: HttpClient) { }
  getHardwares(){
    return this.http.get(`${this.API_URI}/hardware`);
  }
  getHardware(id:number){
    return this.http.get(`${this.API_URI}/hardware/${id}`);
  }

  saveHardware(item:Hardware){
    return this.http.post(`${this.API_URI}/hardware`,item)
  }
  deleteHardware(id:number){
    return this.http.delete(`${this.API_URI}/hardware/${id}`);
  }
  updateHardware(id:number,item:Hardware){
    return this.http.put(`${this.API_URI}/hardware/${id}`,item)
  }

}
