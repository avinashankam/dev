import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})	
export class AppComponent {
  title = 'my-dream-app';
  tabIndex = 0;
  validFirst = true;
  errorMsg = '';
  displayResult = false;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
	phone: new FormControl(''),
	email: new FormControl(''),
	jobTitle: new FormControl(''),
	description: new FormControl(''),
	experience: new FormControl(''),
	portfolio: new FormControl(''),
	liveAt: new FormControl(''),
  });
  aboutForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
	phone: new FormControl(''),
	email: new FormControl(''),
	jobTitle: new FormControl(''),
	description: new FormControl(''),
	experience: new FormControl(''),
	portfolio: new FormControl(''),
	liveAt: new FormControl(''),
  });
  skillsForm = new FormGroup({
    skills: new FormControl(''),
    certification: new FormControl(''),
  });
  availForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
	salary: new FormControl(''),
	dailyRate: new FormControl(''),
	hourRate: new FormControl(''),
	countries: new FormControl(''),
  });
  aboutNext() {
	  //console.log(this.aboutForm.value)
	  this.errorMsg = '';
	  if(this.aboutForm.valid){
		  this.tabIndex = 1;
	  }else{
		  this.errorMsg = "*All Fields Are Required";
	  }
	}
	skillNext() {
		this.errorMsg = '';
		if(this.skillsForm.valid){
		  this.tabIndex = 2;
		  }else{
		  this.errorMsg = "*All Fields Are Required";
		}
	}
	skillPrevious() {
		//if(this.skillsForm.valid){
		  this.tabIndex = 0;
		  //}else{
		  //this.errorMsg = "*All Fields Are Required";
		//}
	}
	availPrevious() {
		//if(this.skillsForm.valid){
		  this.tabIndex = 0;
		  //}else{
		  //this.errorMsg = "*All Fields Are Required";
		//}
	}
	availNext() {
		this.errorMsg = '';
		if(this.availForm.valid){
		  //this.tabIndex = 2;  
		  this.displayResult = true;

		  }else{
		  this.errorMsg = "*All Fields Are Required";
		}
	}
	
	url: string;
onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url
	//console.log(reader.readAsDataURL(event.target.files[0]))
      reader.onload = (event) => {
		if(event.target){
			if(event.target.result != ""){
				//console.log(event.target)
				this.url = event.target.result;
			}
			
		}		  // called once readAsDataURL is completed
        
      }
    }
		
}


visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    {name: 'Software development'},
    {name: 'Software testing'},
    {name: 'Software design'},
	{name: 'Software analysis'},
	{name: 'Software engineering'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  homePage(){this.aboutForm.reset();
  this.skillsForm.reset();
  this.availForm.reset();
	  this.displayResult = false
  }
}

