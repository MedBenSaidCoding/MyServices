import { IOffer } from '../../../modules/offers/core/_models';
import { CreateOfferRequest, CreateOfferSuccess, CreateOfferSuccessPayload, CreateOfferFailurePayload,CreateOfferFailure } from '../../actions/offers';
import { OfferTypes } from "../../action-types/offersTypes";
import {
  FetchOffersFailure,
  FetchOffersFailurePayload,
  FetchOffersRequest,
  FetchOffersSuccess,
  FetchOffersSuccessPayload
} from "../../actions/offers";

export const fetchOffersRequest = (): FetchOffersRequest => ({
  type: OfferTypes.FETCH_OFFER_REQUEST
});

export const fetchOffersSuccess = (
  payload: FetchOffersSuccessPayload
): FetchOffersSuccess => ({
  type: OfferTypes.FETCH_OFFER_SUCCESS,
  payload
});

export const fetchOffersFailure = (
  payload: FetchOffersFailurePayload
): FetchOffersFailure => ({
  type: OfferTypes.FETCH_OFFER_FAILURE,
  payload
});

//Creation
export const createOfferRequest = (payload:IOffer):CreateOfferRequest=>({
  type: OfferTypes.CREATE_OFFER_REQUEST,
  payload
})

export const createOfferSuccess=(payload:CreateOfferSuccessPayload):CreateOfferSuccess=>({
  type: OfferTypes.CREATE_OFFER_SUCCESS,
  payload
})

export const createOfferFailure = (payload: CreateOfferFailurePayload):CreateOfferFailure=>({
  type: OfferTypes.CREATE_OFFER_FAILURE,
  payload
})