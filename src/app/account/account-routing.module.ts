import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const accountRoutes: Routes = [];

@NgModule({
    imports:[RouterModule.forChild(accountRoutes)],
    exports:[RouterModule]
})
export class AccountRoutingModule{}