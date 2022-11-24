import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import { ProfessionalTypes } from '../../action-types/professionalTypes';

export type FetchProfessionalsRequest = {
    type: typeof ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST 
}

export type FetchProfessionalsSuccess = {
    type: typeof ProfessionalTypes.FETCH_PROFESSIONAL_SUCCESS,
    payload :ProfessionalModel[]
}

export type FetchProfessionalsFailure = {
    type: typeof ProfessionalTypes.FETCH_PROFESSIONAL_FAILURE,
    error: string
  }

export type ProfessionalActions =   
|FetchProfessionalsRequest 
|FetchProfessionalsSuccess
|FetchProfessionalsFailure