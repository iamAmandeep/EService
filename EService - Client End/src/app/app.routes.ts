import {Routes} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DisplayServicemenComponent } from './display-servicemen/display-servicemen.component';
import { EditServicemenComponent } from './edit-servicemen/edit-servicemen.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddServicemenComponent } from './add-servicemen/add-servicemen.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { ComboServicesComponent } from './combo-services/combo-services.component';

export const routes : Routes=[
  
    {path:"",component: HomepageComponent},
    {path:"admin/dashboard",component: AdminDashboardComponent},
    {path:"serviceman",component: DisplayServicemenComponent},
    {path:"admin/edit",component: EditServicemenComponent},
    {path:"admin",component: AdminLoginComponent},
    {path:"admin/add",component: AddServicemenComponent},
    {path:"admin/edit",component: EditServicemenComponent},
    {path:"services",component: AllServicesComponent},
    {path:"services/city",component: SearchCityComponent},
    {path:"services/category",component: SearchCategoryComponent},
    {path:"combo",component: ComboServicesComponent}
  ]
