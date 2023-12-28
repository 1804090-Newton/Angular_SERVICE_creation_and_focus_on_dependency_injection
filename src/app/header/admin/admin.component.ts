import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  //providers: [UserService]
})
export class AdminComponent {

  constructor( private userService: UserService ) { 

  }
     name:string='';
     gender:string='male';
     subType:string='monthly';
     status:string='active';

     CreateNewUser(){
      this.userService.CreateUser(this.name,this.gender,this.subType,this.status);
      //console.log(this.userService.users);
     }
}