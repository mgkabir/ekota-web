import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AuthGuard } from './guards/auth-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {
        path: 'account',
        component: AccountComponent,
        children:[
            {path:'list', component:AccountListComponent},
            {path:'new', component:AccountFormComponent},
            {path:'', redirectTo:'list', pathMatch:'full'}
        ],
        canActivate: [AuthGuard]
    },
    {path: '**', component:PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}