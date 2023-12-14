import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ArticleInputInterface} from "../../shared/types/article-input.interface";
import {map, Observable} from "rxjs";
import {ArticleInterface} from "../../shared/types/article.interface";
import {environment} from "../../../environment/environment.";
import {SaveArticleResponseInterface} from "../../shared/types/save-article-response.interface";

@Injectable()

export class CreateArticleService{

  constructor(private http: HttpClient) {}

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface>{
    const fullUrl = environment.apiUrl + '/articles/'
    return this.http.post<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
      map((res: SaveArticleResponseInterface) => {
        return res.article
      })
    )
  }

}
