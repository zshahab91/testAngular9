import { Component } from '@angular/core';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService } from 'ng-wizard';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import { saveData, submitData } from './stores/actions/data';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faPhone = faPhone;
  msg = null;
  isCompeleteStepOne: boolean = false;
  isCompeleteStepTwo: boolean = false;
  isCompeleteStepThree: boolean = false;
  showTable: boolean = false;

  dataForm;
  allData = [];
  config = {
    selected: 0,
    keyNavigation: false,
    AnchorSettings: {
      anchorClickable: true, 
      enableAllAnchors: false,
       markDoneStep: true, 
       markAllPreviousStepsAsDone: true, 
       removeDoneStepOnNavigateBack: false, 
      enableAnchorOnDoneStep: true 
    },
    theme: THEME.arrows,
    toolbarSettings: {
      showNextButton: false,
      showPreviousButton: false,
    }

  };

  languages: any = ['English', 'فارسی'];
  countries: any = ['English', 'Iran']
  constructor(private ngWizardService: NgWizardService, private store: Store<{ data: object }>) {
      this.dataForm = this.store.select('data');
  }

 
  stepChanged(args: StepChangedArgs) {
    this.msg = null;
  }
 
  goPrevious(){
    this.ngWizardService.previous();
  }
  onSubmitStepOne(f: NgForm) {
    if(f.valid){
      this.store.dispatch(saveData(f.value))
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }
    this.isCompeleteStepOne = f.valid; // false

  }
  onSubmitStepTwo(f: NgForm) {
    if(f.valid){
      this.store.dispatch(saveData(f.value))
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }

  }
  onSubmitStepThree(f: NgForm) {
    if(f.valid){
      this.store.dispatch(saveData(f.value))
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }

  }
  saveDataLocalStorage() {
    this.store.dispatch(submitData());
    this.allData = JSON.parse(localStorage.getItem("list_projects")) !== null  ? JSON.parse(localStorage.getItem("list_projects")) : [];
    this.showTable = true;
  }

}
