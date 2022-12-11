import {ProfessionalModel} from '../../../TSModels/Professionals/ProfessionalModel'
import {ProfessionalTypes} from '../../action-types/professionalTypes'
import { SearchFilterModel } from '../../../TSModels/Professionals/SearchFilterModel';

export type FetchProfessionalsRequest = {
  type: typeof ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST,
  payload?: SearchFilterModel
}

export type FetchProfessionalsSuccess = {
  type: typeof ProfessionalTypes.FETCH_PROFESSIONAL_SUCCESS
  payload: ProfessionalModel[]
}

export type FetchProfessionalsFailure = {
  type: typeof ProfessionalTypes.FETCH_PROFESSIONAL_FAILURE
  error: string
}

export type FetchSingleProfessionalRequest = {
  type: typeof ProfessionalTypes.GET_SINGLE_PROFESSIONAL_REQUEST
  payload: string
}

export type FetchSingleProfessionalSuccess = {
  type: typeof ProfessionalTypes.GET_SINGLE_PROFESSIONAL_SUCCESS
  payload: ProfessionalModel
}

export type FetchSingleProfessionalFailure = {
  type: typeof ProfessionalTypes.GET_SINGLE_PROFESSIONAL_FAILURE
  error: string
}

export type UpdateSingleUserRequest = {
    type: typeof ProfessionalTypes.UPDATE_SINGLE_USER_REQUEST
    payload: ProfessionalModel
  }
  
  export type UpdateSingleUserSuccess = {
    type: typeof ProfessionalTypes.UPDATE_SINGLE_USER_SUCCESS
    payload: boolean
  }
  
  export type UpdateSingleUserFailure = {
    type: typeof ProfessionalTypes.UPDATE_SINGLE_USER_FAILURE
    error: string
  }

export type ProfessionalActions =
  | FetchProfessionalsRequest
  | FetchProfessionalsSuccess
  | FetchProfessionalsFailure
  | FetchSingleProfessionalRequest
  | FetchSingleProfessionalSuccess
  | FetchSingleProfessionalFailure
  | UpdateSingleUserRequest
  | UpdateSingleUserSuccess
  | UpdateSingleUserFailure
