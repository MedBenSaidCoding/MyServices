import {getAllActivProfessionals} from './ProfessionalAPI'
import { takeLatest, all, put, call, fork } from 'redux-saga/effects';
import {
  fetchProfessionalsFailure,
  fetchProfessionalsSuccess,
  fetchSingleProfessionalFailure,
  fetchSingleProfessionalSuccess,
  updateSingleUserFailure,
  updateSingleUserSuccess,
} from '../../action-creators/professionals'
import {ProfessionalTypes} from '../../action-types/professionalTypes'
import {ProfessionalModel} from '../../../TSModels/Professionals/ProfessionalModel'

//Firebase
import app, {reduxSagaFirebase} from '../../../firebase/firebase'
import {FetchProfessionalsRequest, FetchSingleProfessionalRequest, UpdateSingleUserRequest} from '../../actions/professionals'


function* fetchProfessionalsSaga(action:FetchProfessionalsRequest) {
  try {
   
    const querySnapshot: ProfessionalModel[] = yield call(getAllActivProfessionals, action.payload)
    yield put(fetchProfessionalsSuccess(querySnapshot))
  } catch (error) {
    if (typeof error === 'string') yield put(fetchProfessionalsFailure(error))
  }
}

type firebaseDocument = {
  data: Function
}

function* getSingleUser(action: FetchSingleProfessionalRequest) {
  try {
    //get current userId
    const currentUser = app.auth().currentUser
    const userId = currentUser?.uid
    console.log(userId)
    if (userId === undefined) {
      throw new Error('current user is undefined')
    }

    //get user
    const snapshot: firebaseDocument = yield call(
      reduxSagaFirebase.firestore.getDocument,
      'users/' + userId
    )
    const user = snapshot.data()
    yield put(fetchSingleProfessionalSuccess(user))
  } catch (error) {
    if (typeof error === 'string') yield put(fetchSingleProfessionalFailure(error))
  }
}

function* updateSigneUserSaga(action: UpdateSingleUserRequest)
{
  try {
    console.log(action.payload);
    const snapthos : firebaseDocument = yield call(
      reduxSagaFirebase.firestore.setDocument,
      'users/'+action.payload.id,
      action.payload,{}
    );
      console.log(snapthos);
    yield put(updateSingleUserSuccess(true))
  } catch (error) {
    console.log(error);
    if (typeof error === 'string') yield put(updateSingleUserFailure(error))
  }
 
}

function* professionalsSaga() {
  yield all([takeLatest(ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST, fetchProfessionalsSaga)])
  yield all([takeLatest(ProfessionalTypes.GET_SINGLE_PROFESSIONAL_REQUEST, getSingleUser)])
  yield all([takeLatest(ProfessionalTypes.UPDATE_SINGLE_USER_REQUEST, updateSigneUserSaga)])
}

export default professionalsSaga
