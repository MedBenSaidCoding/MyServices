import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import { ProfessionalTypes } from '../../action-types/professionalTypes';
import { ProfessionalActions } from '../../actions/professionals';

type ProfessionalsStateType = {
    professionals:ProfessionalModel[],
    loading:boolean,
    error:null|string
}
const initProfessionalsState:ProfessionalsStateType ={
    professionals:[],
    loading:false,
    error:null
    
}

const professionalsReducer = (state:ProfessionalsStateType=initProfessionalsState, action:ProfessionalActions)=>
{
    switch (action.type) {
        case ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST:
            return {
                ...state,
                loading:true}
        case ProfessionalTypes.FETCH_PROFESSIONAL_SUCCESS:
            return {
                ...state,
                loading: false,
                professionals: action.payload
            }

        case ProfessionalTypes.FETCH_PROFESSIONAL_FAILURE:

        return {
            ...state,
            loading: false,
            error: action.error
        }
        default:
            return state;
            break;
    }
}

export default professionalsReducer