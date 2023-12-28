import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class SubscribeService{

    OnSubscribeClicked( subType:string)
      {
        alert(`You have subscribed for ${subType} plan`);
      }
}