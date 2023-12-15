import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProfileInterface} from "../../shared/types/profile.interface";
import {environment} from "../../../environment/environment.";
import {GetUserProfileResponseInterface} from "../types/get-user-profile-response.interface";

@Injectable()

export class UserProfileServices{
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string) : Observable<ProfileInterface>{
    const url = `${environment.apiUrl}/profiles/${slug}`
    return this.http.get<GetUserProfileResponseInterface>(url).pipe(
      map((res: GetUserProfileResponseInterface) => {
        return res.profile
      })
    )
  }


}
