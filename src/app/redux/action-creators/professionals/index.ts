import { ProfessionalModel } from "../../../TSModels/Professionals/ProfessionalModel";
import { ProfessionalTypes } from "../../action-types/professionalTypes";
import { UpdateSingleUserRequest, UpdateSingleUserSuccess, UpdateSingleUserFailure } from '../../actions/professionals/index';
import { FetchProfessionalsRequest,
   FetchProfessionalsSuccess,
    FetchProfessionalsFailure,
    FetchSingleProfessionalRequest,
    FetchSingleProfessionalSuccess,
    FetchSingleProfessionalFailure
   } from "../../actions/professionals";


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

  export const fetchSingleProfessionalRequest = (userId:string): FetchSingleProfessionalRequest => ({
    type: ProfessionalTypes.GET_SINGLE_PROFESSIONAL_REQUEST,
    payload: userId
  }); 

  export const fetchSingleProfessionalSuccess = (
    payload: ProfessionalModel
  ): FetchSingleProfessionalSuccess => ({
    type: ProfessionalTypes.GET_SINGLE_PROFESSIONAL_SUCCESS,
    payload
  });
  
export const fetchSingleProfessionalFailure = (
    error: string
  ): FetchSingleProfessionalFailure => ({
    type: ProfessionalTypes.GET_SINGLE_PROFESSIONAL_FAILURE,
    error
  });  


  export const updateSingleUserRequest = (user:ProfessionalModel): UpdateSingleUserRequest => ({
    type: ProfessionalTypes.UPDATE_SINGLE_USER_REQUEST,
    payload: user
  }); 

  export const updateSingleUserSuccess = (
    payload: boolean
  ): UpdateSingleUserSuccess => ({
    type: ProfessionalTypes.UPDATE_SINGLE_USER_SUCCESS,
    payload
  });
  
export const updateSingleUserFailure = (
    error: string
  ): UpdateSingleUserFailure => ({
    type: ProfessionalTypes.UPDATE_SINGLE_USER_FAILURE,
    error
  });   