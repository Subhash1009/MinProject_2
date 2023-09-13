import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class userservice
{
    //url:any = 'https://jsonplaceholder.typicode.com/users';
    url:any = 'http://localhost:3000/Admin';
    url1:any = 'http://localhost:3000/User';
    url2:any = 'http://localhost:3000/Menulist';
    url3:any = 'http://localhost:3000/Cart';
    url4:any = 'http://localhost:3000/TodayBills';
    url5:any = 'http://localhost:3000/MonthlyBills';
  
    constructor(private objhttp:HttpClient)
    {

    }
    loggedIn():any
    {
        return sessionStorage.getItem("Uname")
    }
    logout():void{

    }
    AdminloggedIn():any
    {
        return sessionStorage.getItem("Uname")
    }
    Adminlogout():void{

    }
    signinadmin():Observable<any>
    {
        return this.objhttp.get<any>(this.url);
    }
    getuserdata():Observable<any>
    {
        return this.objhttp.get<any>(this.url);
    }

    createuser(temp:any):Observable<any>
    {
        console.log(temp);
        return this.objhttp.post<any>(this.url1,temp);
    }
    signinuser():Observable<any>
    {
        return this.objhttp.get<any>(this.url1);
    }
    getcustomerdata():Observable<any>
    {
        return this.objhttp.get<any>(this.url1);
    }
    deletecustomer(id:any):Observable<any>
    {
        return this.objhttp.delete<any>(this.url1+'/' + id);
    }
    addcustomer(temp:any):Observable<any>
    {
        console.log(temp);
        return this.objhttp.post<any>(this.url1,temp);
    }
    
    additems(temp:any):Observable<any>
    {
        return this.objhttp.post<any>(this.url2,temp);
    }
     addcartitems(temp:any):Observable<any>
    {
        return this.objhttp.post<any>(this.url3,temp);
    }
    getcartdata():Observable<any>
    {
        return this.objhttp.get<any>(this.url3);
    }
    deletecartitems(id:any):Observable<any>
    {
        return this.objhttp.delete<any>(this.url3+'/' + id);
    }
    getmenudata():Observable<any>
    {
        return this.objhttp.get<any>(this.url2);
    }
    deletitem(id:any):Observable<any>
    {
        return this.objhttp.delete<any>(this.url2+'/' + id);
    }
    
    Addtocart(id:any):Observable<any>
    {
        console.log(id);
        return this.objhttp.post<any>(this.url3+'/'+id,this.url2+'/' + id);
    }

    gettodaybill():Observable<any>
    {
        return this.objhttp.get<any>(this.url4);
    }

    getmonthlybills():Observable<any>
    {
        return this.objhttp.get<any>(this.url5);
    }
    addbill(temp:any):Observable<any>
    {
        return this.objhttp.post<any>(this.url4,temp);
    }
    addbill1(temp:any):Observable<any>
    {
        return this.objhttp.post<any>(this.url5,temp);
    }

   
    
}