import { ProfessionalModel } from "../../../TSModels/Professionals/ProfessionalModel";
import { ProfessionalTypes } from "../../action-types/professionalTypes";
import { FetchProfessionalsRequest, FetchProfessionalsSuccess, FetchProfessionalsFailure } from "../../actions/professionals";


export const fetchProfessionalsRequest = (): FetchProfessionalsRequest => ({
    type: ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST
  });  
  
export const fetchProfessionalsSuccess = (
    payload: ProfessionalModel[]
  ): FetchProfessionalsSuccess => ({
    type: ProfessionalTypes.FETCH_PROFESSIONAL_SUCCESS,
    payload
  });
  
export const fetchProfessionalsFailure = (
    error: string
  ): FetchProfessionalsFailure => ({
    type: ProfessionalTypes.FETCH_PROFESSIONAL_FAILURE,
    error
  });