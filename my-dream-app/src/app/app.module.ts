import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatChipsModule} from '@angular/material/chips';

import {MatIconModule} from '@angular/material/icon';

//import { MatFileUploadModule } from 'angular-material-fileupload';

//import { FormGroup, FormControl } from '@angular/forms';

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
	MatButtonModule,
	ReactiveFormsModule,
	MatSliderModule,
	MatChipsModule,
	MatIconModule
	//MatFileUploadModule
	//FormBuilder
	//FormGroup,
	//FormControl
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
