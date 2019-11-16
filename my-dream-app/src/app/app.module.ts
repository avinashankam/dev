import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



//import { LayoutModule } from '@angular/cdk/layout';
//import { AngularMaterialModule } from '@app/shared/angular-material.module';
//import { MaterialComponentsModule } from '@angular/core/material-components.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MatTabsModule,
	BrowserAnimationsModule,
	MatInputModule,
	MatButtonModule
	//AngularMaterialModule,
	//MaterialComponentsModule,
	//LayoutModule,
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
