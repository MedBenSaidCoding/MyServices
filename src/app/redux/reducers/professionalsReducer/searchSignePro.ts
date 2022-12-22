import { ProfessionalModel } from '../../../TSModels/Professionals/ProfessionalModel';
import { ProfessionalTypes } from '../../action-types/professionalTypes';
import { ProfessionalActions } from '../../actions/professionals';

type SearchSingleProStateType = {
    singleProfessional?:ProfessionalModel,
    loading:boolean,
    error:null|string,
}
const initProfessionalsState:SearchSingleProStateType ={
    loading:false,
    error:null,
}

const searchSingleProReducer = (state:SearchSingleProStateType=initProfessionalsState, action:ProfessionalActions)=>
{
    switch (action.type) {
        case ProfessionalTypes.SEARCH_SINGLE_PROFESSIONAL_REQUEST:
            return {
                ...state,
                loading:true}
        case ProfessionalTypes.SEARCH_SINGLE_PROFESSIONAL_SUCCESS:
            return {
                ...state,
                loading: false,
                singleProfessional: action.payload
            }
        case ProfessionalTypes.SEARCH_SINGLE_PROFESSIONAL_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.error
        }
        default:
            return state;
    }
}

export default searchSingleProReducer