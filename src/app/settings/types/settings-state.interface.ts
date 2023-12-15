import {BackendErrorsInterface} from "../../shared/types/backend-errors.interface";

export interface SettingsStateInterface{
  isSubmitting: boolean,
  validationErrors: BackendErrorsInterface | null
}
