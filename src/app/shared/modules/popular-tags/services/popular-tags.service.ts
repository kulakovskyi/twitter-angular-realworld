import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../../environment/environment.";
import {PopularTagResponseInterface} from "../types/popular-tag-response.interface";

@Injectable()

export class PopularTagsService{
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<string[]> {
    const url = environment.apiUrl + '/tags'
    return this.http.get<PopularTagResponseInterface>(url).pipe(
      map((res: PopularTagResponseInterface) => {
        return res.tags
      })
    )
  }

}
