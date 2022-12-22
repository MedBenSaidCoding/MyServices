import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'
import app from '../../../firebase/firebase'
import {doc, getDoc, getDocs, getFirestore, collection, query, where} from 'firebase/firestore'
import {OffersActions, CreateOfferRequest} from '../../actions/offers'
import {IOffer} from '../../../modules/offers/core/_models'

const rsf = new ReduxSagaFirebase(app)
const db = getFirestore(app)
const userCollection = collection(db, 'users')
const q = query(collection(db, 'offers'), where('state', '==', true))

export const getOffersFB = async () => {
  let offers: IOffer[] = []

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc: any) => {
    offers = [
      ...offers,
      {
        userId: doc.data().userId,
        title: doc.data().title,
        description: doc.data().description,
        createdAt: doc.data().createdAt,
        updatedAt: doc.data().updatedAt,
        createdBy: doc.data().createdBy,
        zipCode: doc.data().zipCode,
        address: doc.data().address,
        city: doc.data().city,
        category: doc.data().category,
        hourePrice: doc.data().hourePrice,
        id: doc.id,
        completed: doc.data().completed,
        state: doc.data().state,
      },
    ]
  })

  return offers
}
