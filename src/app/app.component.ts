import { Component } from '@angular/core';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService } from 'ng-wizard';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { increment, decrement, reset } from './stores/actions/counter';
import { saveData } from './stores/actions/data';
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

  count$: Observable<number>;
  data$: Observable<null>;
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
  constructor(private ngWizardService: NgWizardService, private store: Store) {
    console.log("store is:", this.store)
    //@ts-ignore
    // this.count$ = store.pipe(select('count'));
  
    // this.data$ = store.pipe(select('dataForm'));
  }
  
  ngOnInit() {

  }
 
  stepChanged(args: StepChangedArgs) {
    
    this.msg = null;
  }
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
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
    console.log("two", f.value)
    if(f.valid){
      this.store.dispatch(saveData(f.value))
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }

  }
  onSubmitStepThree(f: NgForm) {
    console.log("three", f.value)
    if(f.valid){
      this.store.dispatch(saveData(f.value))
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }

  }

}
