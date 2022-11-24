//import { CreateOfferRequest } from './types';
import { IOffer } from '../../../modules/offers/core/_models';
import { OfferTypes } from "../../action-types/offersTypes";

export interface OffersState {
  loading: boolean;
  offers: IOffer[];
  error: string | null;
}

export interface FetchOffersSuccessPayload {
    offers: IOffer[];
}

export interface FetchOffersFailurePayload {
  error: string;
}

export interface FetchOffersRequest {
  type:  OfferTypes.FETCH_OFFER_REQUEST;
}

export type FetchOffersSuccess = {
  type: typeof OfferTypes.FETCH_OFFER_SUCCESS;
  payload: FetchOffersSuccessPayload;
};

export type FetchOffersFailure = {
  type: typeof OfferTypes.FETCH_OFFER_FAILURE;
  payload: FetchOffersFailurePayload;
};



//Creation

export interface CreateOffersState {
  loading: boolean;
  offer?: IOffer;
  error: string | null;
}

export interface CreateOfferRequest {
  type: typeof OfferTypes.CREATE_OFFER_REQUEST;
  payload: IOffer;
}

export interface CreateOfferSuccess {
  type: typeof OfferTypes.CREATE_OFFER_SUCCESS,
  payload: CreateOfferSuccessPayload
}

export interface CreateOfferSuccessPayload {
  offer:IOffer
}

export interface CreateOfferFailure {
  type: typeof OfferTypes.CREATE_OFFER_FAILURE,
  payload: CreateOfferFailurePayload
}

export interface CreateOfferFailurePayload {
  error: string;
}

export type OffersActions =
  | FetchOffersRequest
  | FetchOffersSuccess
  | FetchOffersFailure
  | CreateOfferRequest
  | CreateOfferFailure
  | CreateOfferSuccess


//export CreateOfferRequest;