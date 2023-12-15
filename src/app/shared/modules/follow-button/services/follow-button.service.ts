import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environment/environment.";
import {Observable} from "rxjs";
import {GetUserProfileResponseInterface} from "../../../../user-profile/types/get-user-profile-response.interface";

@Injectable()

export class FollowButtonService{

  constructor(private http: HttpClient) {}
  follow(slug: string): Observable<GetUserProfileResponseInterface>{
    const fullUrl = `${environment.apiUrl}/profiles/${slug}/follow`
    return this.http.post<GetUserProfileResponseInterface>(fullUrl, {})
  }
  unFollow(slug: string): Observable<GetUserProfileResponseInterface>{
    const fullUrl = `${environment.apiUrl}/profiles/${slug}/follow`
    return this.http.delete<GetUserProfileResponseInterface>(fullUrl, {})
  }
}
