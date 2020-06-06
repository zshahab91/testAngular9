import { Component } from '@angular/core';
import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService } from 'ng-wizard';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { increment, decrement, reset } from './stores/actions/counter';
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
  config = {
    selected: 1,
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

  languages: any = ['English', 'فارسی']
  constructor(private ngWizardService: NgWizardService, private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }
  
 
  stepChanged(args: StepChangedArgs) {
    console.log("stepChanged",args.step);
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
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }
    this.isCompeleteStepOne = f.valid; // false

  }
  onSubmitStepTwo(f: NgForm) {
    console.log("two", f.value)
    if(f.valid){
      this.ngWizardService.next();
    }else{
      this.msg ="Compelete all boxes!!!"
    }

  }

}
