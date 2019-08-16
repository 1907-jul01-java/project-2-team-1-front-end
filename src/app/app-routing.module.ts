import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BiglistComponent } from './biglist/biglist.component';


 

const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'demo',
        component: BiglistComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }