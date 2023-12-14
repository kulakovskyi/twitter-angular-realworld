import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ArticleInputInterface} from "../../shared/types/article-input.interface";
import {map, Observable} from "rxjs";
import {ArticleInterface} from "../../shared/types/article.interface";
import {environment} from "../../../environment/environment.";
import {SaveArticleResponseInterface} from "../../shared/types/save-article-response.interface";

@Injectable()

export class EditArticleService{
  constructor(private http: HttpClient) {
  }

  updateArticle(articleInput: ArticleInputInterface, slug: string): Observable<ArticleInterface>{
    const fullUrl = `${environment.apiUrl}/articles/${slug}`
    return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(
      map((res: SaveArticleResponseInterface) => {
        return res.article
      })
    )
  }
}
