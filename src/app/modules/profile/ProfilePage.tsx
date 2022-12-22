import {Navigate, Routes, Route, Outlet, useParams} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Projects} from './components/Projects'
import {Campaigns} from './components/Campaigns'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/reducers/rootReducer'
import {searchSingleProfessionalRequest} from '../../redux/action-creators/professionals/index'
import {useEffect} from 'react'
import { format } from 'react-string-format';



const ProfilePage = () => {

  let {id} = useParams()
  const profileBreadCrumbs: Array<PageLink> = [
    {
      title: 'Profile',
      path: format('/crafted/pages/profile/{0}/overview',id?id:0),
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



 

  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(searchSingleProfessionalRequest(id))
    }
  }, [])

  const {loading, singleProfessional, error} = useSelector((state: RootState) => state.searchSinglePro)

  return (
    <Routes>
      {!loading && !error && singleProfessional && (
        <Route
          element={
            <>
              <ProfileHeader {...singleProfessional} />
              <Outlet />
            </>
          }
        >
          <Route
            path='overview'
            element={
              <>
                <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
                <Overview selectedUser={singleProfessional} />
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
        </Route>
      )}

    
    </Routes>
  )
}

export default ProfilePage
