import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { userservice } from "../Service/user.service";

@Injectable()
export class DashboardAuthentication1 implements CanActivate
{

    constructor(private obj:userservice, private mynavigation:Router)
    {

    }
    canActivate(): boolean
    {
        if(this.obj.loggedIn())
        {
            return true;
        }
        else
        {
            this.mynavigation.navigate(['Admin']);
            return false;
        }
        
    }
}