import {BackendErrorsInterface} from "../../shared/types/backend-errors.interface";

export interface CreateArticleStateInterface{
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
