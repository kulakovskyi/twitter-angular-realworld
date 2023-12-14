import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment.";
import {map, Observable} from "rxjs";
import {GetArticleResponseInterface} from "../types/get-article-response.interface";
import {ArticleInterface} from "../../shared/types/article.interface";

@Injectable()

export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(name: string): Observable<ArticleInterface>{
    const fullUrl = `${environment.apiUrl}/articles/${name}`
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((res: GetArticleResponseInterface) => {
        return res.article
      })
    )
  }

  deleteArticle(name: string): Observable<{}>{
    const url = `${environment.apiUrl}/articles/${name}`
    return this.http.delete(url)
  }

}
