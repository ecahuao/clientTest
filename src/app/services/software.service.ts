import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Software } from '../models/Software'

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  API_URI ='https://localhost:44345/api'

  constructor(private http: HttpClient) { }

  getSoftwares(){
    return this.http.get(`${this.API_URI}/software`);
  }
  getSoftware(id:number){
    return this.http.get(`${this.API_URI}/software/${id}`);
  }

  saveSoftware(item:Software){
    return this.http.post(`${this.API_URI}/software`,item)
  }
  deleteSoftware(id:number){
    return this.http.delete(`${this.API_URI}/software/${id}`);
  }
  updateSoftware(id:number,item:Software){
    return this.http.put(`${this.API_URI}/software/${id}`,item)
  }
}
