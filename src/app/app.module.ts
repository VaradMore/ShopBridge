import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AdministrationComponent } from './administration/administration.component';
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { AdministrationService } from './core/services/administration.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdministrationComponent,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    DataTableModule
  ],
  providers: [
    AdministrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
