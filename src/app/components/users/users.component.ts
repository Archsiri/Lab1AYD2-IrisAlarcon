import { Component, OnInit } from '@angular/core';
import {ReqresapiService} from '../../services/reqresapi.service';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users: any;
 test: any;

  constructor(private reqResApiService: ReqresapiService) { }

  ngOnInit(): void{

    this.reqResApiService.getAllUsers().subscribe(data => {this.users = data;

    })


  }

}
