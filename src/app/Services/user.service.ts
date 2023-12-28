import { Injectable, EventEmitter } from '@angular/core';
import { User } from "../Models/User";
import {  loggerService } from "./logger.service";

@Injectable({
    providedIn: 'root'
})
   
export class UserService{
    users: User[] = [
        new User('Hasan', 'Male', 'Monthly', 'Active'),
        new User('Asif', 'male', 'Yearly', 'Inactive'), 
        new User('shimul', 'Male', 'Quaterly', 'Active'),
        new User('mayesha','female','Monthly','Inactive') 
    ];

    constructor(private logger: loggerService){

    }

    OnUserDetailsClicked: EventEmitter<User> = new EventEmitter<User>();

    OnShowUserDetails(user: User){
        this.OnUserDetailsClicked.emit(user);
    }

    GetAllUsers(){
        return this.users;
    }

    CreateUser(name: string, gender: string, subType: string, status: string){
        let user = new User(name, gender, subType, status);
        this.users.push(user);
        this.logger.LogMessage(name, status);
    }
}