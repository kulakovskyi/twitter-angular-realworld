import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {RegisterRequestInterface} from "../types/register-request.interface";
import {CurrentUserInterface} from "../../shared/types/current-user.interface";
import {AuthResponseInterface} from "../types/auth-response.interface";
import {environment} from "../../../environment/environment.prod";
import {LoginRequestInterface} from "../types/login-request.interface";
import {CurrentUserInputInterface} from "../../shared/types/current-user-input.interface";

@Injectable()

export class AuthService{
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface){
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(
        map(this.getUser)
      )
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<AuthResponseInterface>(url, data)
      .pipe(
        map(this.getUser)
      )
  }

  getCurrentUser(): Observable<CurrentUserInterface>{
    const url = environment.apiUrl + '/user'
    return this.http.get<AuthResponseInterface>(url)
      .pipe(
        map(this.getUser)
      )
  }

  updateCurrentUser(currentUserInput: CurrentUserInputInterface): Observable<CurrentUserInputInterface>{
    const url = environment.apiUrl + '/user'
    return this.http.put<any>(url, currentUserInput).pipe(
      map(res =>{
        return res
      })
    )
  }
}
