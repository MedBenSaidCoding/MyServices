import { OfferTypes } from "../../action-types/offersTypes";
import { OffersActions, OffersState } from "../../actions/offers";

const initialState: OffersState = {
  loading: false,
  offers: [],
  error: null
};

const offersReducer = (state = initialState, action: OffersActions) => {
  switch (action.type) {

    //GET
    case OfferTypes.FETCH_OFFER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case OfferTypes.FETCH_OFFER_SUCCESS:
      return {
        ...state,
        loading: false,
        offers: action.payload,
        error: null
      };
    case OfferTypes.FETCH_OFFER_FAILURE:
      return {
        ...state,
        loading: false,
        offers: [],
        error: action.payload.error
      };

    //CREATE
    case OfferTypes.CREATE_OFFER_REQUEST:
        return {
          ...state,
          loading:true
        }; 
    case OfferTypes.CREATE_OFFER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case OfferTypes.CREATE_OFFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };


    default:
      return {
        ...state
      };
  }
};

export default offersReducer
