import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AccountComponent } from "./account.component";
import { AuthGuard } from "../guards/auth-guard";

const accountRoutes: Routes = [
    {
        path: 'accounts', 
        component: AccountComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports:[RouterModule.forChild(accountRoutes)],
    exports:[RouterModule]
})
export class AccountRoutingModule{}