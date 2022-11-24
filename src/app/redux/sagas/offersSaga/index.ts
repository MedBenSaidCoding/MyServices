import { createOfferFailure, createOfferSuccess } from '../../action-creators/offersActions';
import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IOffer } from '../../../modules/offers/core/_models';
import {
  fetchOffersFailure,
  fetchOffersSuccess
} from "../../action-creators/offersActions";
import { OfferTypes } from "../../action-types/offersTypes";

import { OffersActions,CreateOfferRequest } from '../../actions/offers';

//API
import { getOffersFB } from './offerAPI';



const getOffers = () =>
  axios.get<IOffer[]>("https://jsonplaceholder.typicode.com/todos");

const createOfferAsync =async (offer:IOffer) => {
  let createOffer = offer;

  return createOffer;
}

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

function* fetchOffersSaga() {
  try {
    const querySnapshot:IOffer[] =  yield call(getOffersFB);

    yield put(
      fetchOffersSuccess({
        offers: querySnapshot
      })
    );
  } catch (e:any) {
    yield put(
      fetchOffersFailure({
        error: e.message
      })
    );
  }
}

function* createOfferSaga(createOfferRequest:CreateOfferRequest)
{
  try {
    const offer = createOfferAsync(createOfferRequest.payload)
    yield put(createOfferSuccess({
      offer:createOfferRequest.payload
    }))
  } catch (e:any) {
    yield put(createOfferFailure({error:e.message}))
  }
}

function* offersSaga() {
  yield all([takeLatest(OfferTypes.FETCH_OFFER_REQUEST, fetchOffersSaga)]);
  yield all ([takeLatest(OfferTypes.CREATE_OFFER_REQUEST,createOfferSaga)])
}

export default offersSaga;
