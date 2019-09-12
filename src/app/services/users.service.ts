import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI ='https://localhost:44345/api'

  
  constructor(private http: HttpClient) {}  
getUsers(){
  return this.http.get(`${this.API_URI}/user`);
}

getUser(id:number){
  return this.http.get(`${this.API_URI}/user/${id}`);
}
saveUser(item:User){
  return this.http.post(`${this.API_URI}/user`,item)
}

deleteUser(id:number){
  return this.http.delete(`${this.API_URI}/user/${id}`);
}
updateUser(id:number,item:User){
  return this.http.put(`${this.API_URI}/user/${id}`,item)
}
}
