import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import {AuthModel, UserModel} from './_models'
import * as authHelper from './AuthHelpers'
import {getUserByToken, getUserByTokenFirebase} from './_requests'
import {WithChildren} from '../../../../_metronic/helpers'

//Firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import firebaseApp from '../../../firebase/firebase'

//Builders
import {
  buildProfessionalUserFromAuth,
  buildUserModelFromAuth,
  initProfessionalUser,
} from '../builders/userProfileBuilder'
import {ProfessionalModel} from '../../../TSModels/Professionals/ProfessionalModel'

const authFirebase = getAuth(firebaseApp)

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: UserModel | undefined
  loggedUser: ProfessionalModel | undefined
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>
  setLoggedUser: Dispatch<SetStateAction<ProfessionalModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  loggedUser: undefined,
  setCurrentUser: () => {},
  setLoggedUser: () => {},
  logout: () => {},
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({children}) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()
  const [loggedUser, setLoggedUser] = useState<ProfessionalModel | undefined>()
  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    } else {
      authHelper.removeAuth()
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
    setLoggedUser(undefined)
    signOut(firebaseApp.auth())
  }

  return (
    <AuthContext.Provider
      value={{auth, saveAuth, currentUser, setCurrentUser, logout, loggedUser, setLoggedUser}}
    >
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({children}) => {
  const {auth, logout, setCurrentUser, setLoggedUser} = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  const [user, loading, error] = useAuthState(authFirebase)

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      if (user) {
        const token = await getIdToken(user)
        let currentUser = await buildUserModelFromAuth()
        setCurrentUser(currentUser)
        let loggedUser = await buildProfessionalUserFromAuth()
        setLoggedUser(loggedUser)
        setShowSplashScreen(false)
      } else {
        logout()
        setShowSplashScreen(false)
      }
    })
  }, [])

  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  /*useEffect(() => {
    const requestUser = async (apiToken: string) => {
      try {
        if (!didRequest.current) {
          console.log(apiToken);
         // const {data} = await getUserByToken(apiToken)
          const res :any = await getUserByTokenFirebase(apiToken)
          console.log(res);
          
          let userModel:UserModel ={id:"123", username:"Mbensaid1", first_name:"Med", last_name:"Bensaid", email:authFirebase.currentUser?.email?authFirebase.currentUser?.email:"null", password:""}
         
          console.log(user);
          console.log(authFirebase.currentUser);

         if (firebaseApp.auth().currentUser) {
          console.log(firebaseApp.auth().currentUser);
          setCurrentUser(userModel);
          }
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          logout()
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }

    if (auth && auth.api_token) {
     // requestUser(auth.api_token)
    } else {
      logout()
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])*/

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export {AuthProvider, AuthInit, useAuth}
