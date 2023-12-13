import {Component, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../../shared/types/backend-errors.interface";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {LoginRequestInterface} from "../../types/login-request.interface";
import {isSubmittedSelector, validationErrorsSelector} from "../../store/selectors";
import {loginAction} from "../../store/actions/login.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<BackendErrorsInterface>

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.initialForm()
    this.initialValue()
  }

  initialForm(){
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [
        Validators.required,
      ])
    })
  }

  initialValue(){
    this.isSubmitting$ = this.store.pipe(select(isSubmittedSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit() {
    if(this.form.invalid) return
    const request: LoginRequestInterface = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({request}))
  }
}
