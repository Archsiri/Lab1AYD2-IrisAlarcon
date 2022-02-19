import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresapiService {

  private uri = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUser(idUser: number){
    return this.http.get(this.uri+'users/'+idUser)
  }

  createUser(userName: string, userJob: string){
    let user_data = {
      name: userName,
      job: userJob
    }
    return this.http.post(this.uri+'users', user_data)
  }

  updateUser(){}

  deleteUser(userId: number){
    this.http.delete(this.uri+'users/'+userId)
  }
}
