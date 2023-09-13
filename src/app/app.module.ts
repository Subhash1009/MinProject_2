import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdmincrudComponent } from './admin/admincrud/admincrud.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { FormComponent } from './admin/form/form.component';
import { ItemsComponent } from './items/items.component';
import { UserComponent } from './user/user.component';
import { UsercrudComponent } from './admin/usercrud/usercrud.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserregisterComponent } from './user/userregister/userregister.component';
import { MenuComponent } from './admin/menu/menu.component';
import { CartComponent } from './items/cart/cart.component';
import { userservice } from './Service/user.service';
import { DashboardAuthentication1 } from './Security/secure1';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAuthentication } from './Security/secure';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodaybillComponent } from './admin/todaybill/todaybill.component';
import { MonthlybillsComponent } from './admin/monthlybills/monthlybills.component';
import { PaybillComponent } from './user/paybill/paybill.component';
import { CartformComponent } from './items/cartform/cartform.component';


const myroute:Routes=[
  {path:'Admin',component:AdminComponent},
  {path:'Adminhome',component:AdminhomeComponent, canActivate:[DashboardAuthentication1]},
  {path:'User',component:UserComponent},
  {path:'Userlogin',component:UserloginComponent},
  {path:'Userregister',component:UserregisterComponent},
  {path:'Usercurd',component:UsercrudComponent},
  {path:'Form',component:FormComponent},
  {path:'paybill',component:PaybillComponent},
  {path:'Admincurd',component:AdmincrudComponent},
  {path:'Items',component:ItemsComponent},
  {path:'Menu',component:MenuComponent},
  {path:'Main',component:AppComponent},
  {path:'Cart',component:CartComponent},
  {path:'Cartform',component:CartformComponent},
  {path:'Todaybill',component:TodaybillComponent },
  {path:'Monthlybills',component:MonthlybillsComponent },
  {path:'Userhome',component:UserhomeComponent, canActivate:[DashboardAuthentication]}
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdmincrudComponent,
    AdminhomeComponent,
    FormComponent,
    ItemsComponent,
    UserComponent,
    UsercrudComponent,
    UserhomeComponent,
    UserloginComponent,
    UserregisterComponent,
    MenuComponent,
    CartComponent,
    TodaybillComponent,
    MonthlybillsComponent,
    PaybillComponent,
    CartformComponent,
   
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(myroute),HttpClientModule,ReactiveFormsModule
  ],
  providers: [userservice,DashboardAuthentication,DashboardAuthentication1],
  bootstrap: [AppComponent]
})
export class AppModule { }
