import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { DashComponent } from './dash/dash.component'
import { ViewlistComponent } from './viewlist/viewlist.component'

const routes: Routes = [
   {path:'',component: HomeComponent},
   {path:'log',component: LoginComponent},
   {path:'reg',component:  RegisterComponent},
   {path:'dashb',component: DashComponent },
   {path:'v',component: ViewlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
