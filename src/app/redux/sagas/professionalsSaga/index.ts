import { getAllActivProfessionals } from './ProfessionalAPI';
import {takeLatest, all, put, call} from 'redux-saga/effects'
import {fetchProfessionalsFailure} from '../../action-creators/professionals'
import {ProfessionalTypes} from '../../action-types/professionalTypes'
import {ProfessionalModel} from '../../../TSModels/Professionals/ProfessionalModel'
import {fetchProfessionalsSuccess} from '../../action-creators/professionals/index'

function* fetchProfessionalsSaga() {
  try {
    const querySnapshot: ProfessionalModel[] = yield call(getAllActivProfessionals)
    yield put(fetchProfessionalsSuccess(querySnapshot))
  } catch (error) {
    if (typeof error === 'string') yield put(fetchProfessionalsFailure(error))
  }
}

function* professionalsSaga() {
  yield all([takeLatest(ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST, fetchProfessionalsSaga)])
}

export default professionalsSaga
