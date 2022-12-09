import {Navigate, Routes, Route, Outlet, useParams} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Projects} from './components/Projects'
import {Campaigns} from './components/Campaigns'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProfessionalRequest, SearchSingleProfessionalRequest } from '../../redux/action-creators/professionals'
import { RootState } from '../../redux/reducers/rootReducer'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/crafted/pages/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage = () => {

  let {id} = useParams()
  const dispatch = useDispatch()
  const {loading, professionals, error} = useSelector((state: RootState) => state.professionals)

  console.log(id);
  console.log(professionals)
  !loading && !error ? console.log(professionals.filter(x=>x.id==id))
  :console.log("zero")
  return (
   
    <Routes>
      { (!loading && !error && professionals.filter(x=>x.id===id).length>0) && <Route
        element={
          <>
            <ProfileHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              <Overview selectedUser={''} />
            </>
          }
        />
        <Route
          path='projects'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
              <Projects />
            </>
          }
        />
        <Route
          path='campaigns'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
              <Campaigns />
            </>
          }
        />
        <Route
          path='documents'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
              <Documents />
            </>
          }
        />
        <Route
          path='connections'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
              <Connections />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/pages/profile/overview' />} />
      </Route>}

      {loading && <h2>Loadng...</h2>}
    
    </Routes> 
  )
}

export default ProfilePage
