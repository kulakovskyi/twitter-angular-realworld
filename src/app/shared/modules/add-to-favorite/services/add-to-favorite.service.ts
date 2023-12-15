import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {ArticleInterface} from "../../../types/article.interface";
import {environment} from "../../../../../environment/environment.";
import {HttpClient} from "@angular/common/http";
import {GetArticleResponseInterface} from "../../../../article/types/get-article-response.interface";

@Injectable()

export class AddToFavoriteService {
  constructor(private http: HttpClient) {
  }
  addToFavourites(slug: string): Observable<ArticleInterface>{
    const url = this.getUrl(slug)
    return this.http.post<GetArticleResponseInterface>(url, {}).pipe(map(this.getArticle))
  }

  removeFromFavourites(slug: string): Observable<ArticleInterface>{
    const url = this.getUrl(slug)
    return this.http.delete<GetArticleResponseInterface>(url).pipe(map(this.getArticle))
  }

  getUrl(slug: string): string{
    return `${environment.apiUrl}/articles/${slug}/favorite `
  }

  getArticle(res: GetArticleResponseInterface): ArticleInterface{
    return res.article
  }
}
