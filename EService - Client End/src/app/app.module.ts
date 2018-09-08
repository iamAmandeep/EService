import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddServicemenComponent } from './add-servicemen/add-servicemen.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DisplayServicemenComponent } from './display-servicemen/display-servicemen.component';
import { EditServicemenComponent } from './edit-servicemen/edit-servicemen.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminServiceService } from './services/admin-service.service';
import { AllServicesComponent } from './all-services/all-services.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { ComboServicesComponent } from './combo-services/combo-services.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AddServicemenComponent,
    HomepageComponent,
    DisplayServicemenComponent,
    EditServicemenComponent,
    AllServicesComponent,
    SearchCityComponent,
    SearchCategoryComponent,
    ComboServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
