import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import { ProfessionalTypes } from '../../action-types/professionalTypes';
import { ProfessionalActions } from '../../actions/professionals';

type CurrentUserStateType = {
    currentUser?:ProfessionalModel,
    loading:boolean,
    error:null|string,
    isUpdating:boolean,
    updateOperationStatusSuccess: boolean
}
const initProfessionalsState:CurrentUserStateType ={
    loading:false,
    error:null,
    updateOperationStatusSuccess:false,
    isUpdating:false
}

const currentUserReducer = (state:CurrentUserStateType=initProfessionalsState, action:ProfessionalActions)=>
{
    switch (action.type) {
        case ProfessionalTypes.GET_SINGLE_PROFESSIONAL_REQUEST:
            return {
                ...state,
                loading:true}
        case ProfessionalTypes.GET_SINGLE_PROFESSIONAL_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case ProfessionalTypes.GET_SINGLE_PROFESSIONAL_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error
        }
        case ProfessionalTypes.UPDATE_SINGLE_USER_REQUEST:
        return {...state,
             isUpdating:true
            }
        case ProfessionalTypes.UPDATE_SINGLE_USER_SUCCESS:
            return {...state,
            isUpdating:false,
            updateOperationStatusSuccess:true
        } 
        case ProfessionalTypes.UPDATE_SINGLE_USER_FAILURE:
            return {...state,
            isUpdating:false,
            updateOperationStatusSuccess:false,
            error:action.error
        }    
        default:
            return state;
    }
}

export default currentUserReducer