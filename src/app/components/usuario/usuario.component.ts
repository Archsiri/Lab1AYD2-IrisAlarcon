import { Component, OnInit } from '@angular/core';
import {ReqresapiService} from '../../services/reqresapi.service';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  idUser = 1;
  user: any;
  constructor(public reqResApiService: ReqresapiService) { }

  ngOnInit(){
    this.reqResApiService.getUser(this.idUser)
      .subscribe(data => {this.user = data;
      console.log(data);

      });

  }

  searchId(){
    this.reqResApiService.getUser(this.idUser)
      .subscribe(data => {this.user = data;
        console.log(data);

      });
  }

}
