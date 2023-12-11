import {Component, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegisterRequestInterface} from "../../types/register-request.interface";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register.action";
import {Observable} from "rxjs";
import {isSubmittedSelector} from "../../store/selectors";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{
  form!: FormGroup
  isSubmitted$!: Observable<boolean>

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.initialForm()
    this.initialValues()
  }

  initialValues(){
    this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector))
  }

  initialForm(){
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}))
    console.log(request)
  }
}
