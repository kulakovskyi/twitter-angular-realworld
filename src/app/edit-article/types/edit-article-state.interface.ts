import {ArticleInterface} from "../../shared/types/article.interface";
import {BackendErrorsInterface} from "../../shared/types/backend-errors.interface";

export interface EditArticleStateInterface {
  isLoading: boolean
  article: ArticleInterface | null
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
