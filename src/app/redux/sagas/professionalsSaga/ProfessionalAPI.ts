import {ProfessionalModel} from '../../../TSModels/Professionals/ProfessionalModel'
import app, {storage} from '../../../firebase/firebase'
import {
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  doc,
  getDoc,
} from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {SearchFilterModel} from '../../../TSModels/Professionals/SearchFilterModel'

const db = getFirestore(app)

export const getAllActivProfessionals = async (searchfilter?: SearchFilterModel) => {
  let professionals: ProfessionalModel[] = []

  const conditions = [where('isProfessional', '==', true), orderBy('reviews', 'desc')]

  if (searchfilter && searchfilter.city != 'All') {
    conditions.push(where('city', '==', searchfilter?.city))
  }
  if (searchfilter && searchfilter.service != 'All') {
    conditions.push(where('services', 'array-contains', searchfilter.service))
  }

  try {
    const q = query(collection(db, 'users'), ...conditions)
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc: any) => {
      professionals = [
        ...professionals,
        {
          id: doc.id,
          avatar: doc.data().avatar,
          first_name: doc.data().first_name,
          last_name: doc.data().last_name,
          email: doc.data().email,
          city: doc.data().city,
          services: doc.data().services,
          gender: doc.data().gender,
          isProfessional: doc.data().isProfessional,
          phoneNumber1: doc.data().phoneNumber1,
          phoneNumber2: doc.data().phoneNumber2,
          createdAt: doc.data().createdAt,
          onlineStatus: doc.data().onlineStatus,
          entityType: doc.data().entityType,
          reviews: doc.data().reviews,
        },
      ]
    })
  } catch (error) {
    console.error(error)
  }

  return professionals
}

export const uploadUseravatar = async (user: ProfessionalModel) => {
  let fileUrl = ''
  if (user.avatarFile instanceof File) {
    const storageRef = ref(storage, `/files/${user.avatarFile.name}`)
    const uploadTask = await uploadBytesResumable(storageRef, user.avatarFile)

    fileUrl= await getDownloadURL(uploadTask.ref)
  }
  return fileUrl
}

export const getSingleUser = async (userId: string) => {
  try {
    const docRef = doc(db, 'users', userId)
    const docSnap = await getDoc(docRef)
    const user = docSnap.data()
    if (user)
      return {
        id: docSnap.id,
        avatar: user.avatar,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        city: user.city,
        services: user.services,
        gender: user.gender,
        isProfessional: user.isProfessional,
        phoneNumber1: user.phoneNumber1,
        phoneNumber2: user.phoneNumber2,
        createdAt: user.createdAt,
        onlineStatus: user.onlineStatus,
        entityType: user.entityType,
        reviews: user.reviews,
      
      }
  } catch (error) {
    console.error(error)
  }
}
