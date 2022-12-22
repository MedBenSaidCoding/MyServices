import {getAllActivProfessionals, uploadUseravatar} from './ProfessionalAPI'
import {takeLatest, all, put, call, fork, takeEvery} from 'redux-saga/effects'
import {
  fetchProfessionalsFailure,
  fetchProfessionalsSuccess,
  fetchSingleProfessionalFailure,
  fetchSingleProfessionalSuccess,
  searchSingleProfessionalFailure,
  searchSingleProfessionalSuccess,
  updateSingleUserFailure,
  updateSingleUserSuccess,
} from '../../action-creators/professionals'
import {ProfessionalTypes} from '../../action-types/professionalTypes'
import {ProfessionalModel} from '../../../TSModels/Professionals/ProfessionalModel'

//Firebase
import app, {reduxSagaFirebase} from '../../../firebase/firebase'
import {
  FetchProfessionalsRequest,
  FetchSingleProfessionalRequest,
  SearchSingleProfessionalRequest,
  UpdateSingleUserRequest,
} from '../../actions/professionals'
import {eventChannel} from 'redux-saga'

function* fetchProfessionalsSaga(action: FetchProfessionalsRequest) {
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

function* uploadFile(path: string, file: File) {
  const task = reduxSagaFirebase.storage.uploadFile(path, file)
  yield task
}

function* syncFileUrl(filePath: string) {
  try {
    const url: string = yield call(reduxSagaFirebase.storage.getDownloadURL, filePath)
    return url
  } catch (error) {
    console.error(error)
  }
}

function* updateSigneUserSaga(action: UpdateSingleUserRequest) {
  try {
    //Upload avatar
    if (action.payload.avatarFile instanceof File && action.payload.avatar != undefined) {
      yield call(
        uploadFile,
        `/files/${action.payload.id}/${action.payload.avatarFile.name}`,
        action.payload.avatarFile
      )
      const url: string = yield call(
        syncFileUrl,
        `/files/${action.payload.id}/${action.payload.avatarFile.name}`
      )
      if (url !== '') {
        action.payload = {...action.payload, avatar: url, avatarFile: url}
      }
    }
    //Update user
    yield call(
      reduxSagaFirebase.firestore.setDocument,
      'users/' + action.payload.id,
      action.payload,
      {}
    )
    yield put(updateSingleUserSuccess(action.payload))
  } catch (error) {
    console.log(error)
    if (typeof error === 'string') yield put(updateSingleUserFailure(error))
  }
}

function* searchSingleUser(action: SearchSingleProfessionalRequest) {
  try {
    //get user
    const snapshot: firebaseDocument = yield call(
      reduxSagaFirebase.firestore.getDocument,
      'users/' + action.payload
    )
    const user = snapshot.data()
    yield put(searchSingleProfessionalSuccess(user))
  } catch (error) {
    if (typeof error === 'string') yield put(searchSingleProfessionalFailure(error))
  }
}

function* professionalsSaga() {
  yield all([takeLatest(ProfessionalTypes.FETCH_PROFESSIONAL_REQUEST, fetchProfessionalsSaga)])
  yield all([takeLatest(ProfessionalTypes.GET_SINGLE_PROFESSIONAL_REQUEST, getSingleUser)])
  yield all([takeLatest(ProfessionalTypes.UPDATE_SINGLE_USER_REQUEST, updateSigneUserSaga)])
  yield all([takeLatest(ProfessionalTypes.SEARCH_SINGLE_PROFESSIONAL_REQUEST, searchSingleUser)])
}

export default professionalsSaga
