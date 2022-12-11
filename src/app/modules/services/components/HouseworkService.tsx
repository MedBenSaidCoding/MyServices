/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../redux/reducers/rootReducer'
import {fetchProfessionalsRequest} from '../../../redux/action-creators/professionals/index'
import {ProfessionalCard} from './Professionals/ProfessionalCard'
import {useLayout} from '../../../../_metronic/layout/core'
import {useLocation} from 'react-router-dom'
import {Toolbar} from '../../../../_metronic/layout/components/toolbar/Toolbar'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Dropdown1} from '../../../../_metronic/partials'
import {ToolbarExtended} from '../../../../_metronic/layout/components/toolbar/toolbars'
import {ToolbarExtendedSearchProfessional} from '../../../../_metronic/layout/components/toolbar/toolbars/ToolbarExtendedSearchProfessional'

export function HouseworkService() {
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state: RootState) => state.currentUser)
  const {loading, professionals, error} = useSelector((state: RootState) => state.professionals)

  useEffect(() => {

    if(currentUser && currentUser.city )
    {
      dispatch(fetchProfessionalsRequest({city:currentUser.city, service:"All", sortBy:"Score"}));
    }
   
  }, [currentUser?.city])

  return (
    <>
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='me-7 mb-4'></div>

            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <ToolbarExtendedSearchProfessional />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='d-flex flex-wrap flex-stack mb-6'></div>

      <div className='row g-6 g-xl-9'>
        {!loading &&
          Array.isArray(professionals) &&
          professionals?.map((professional, i) => {
            return <ProfessionalCard key={`${i}-${professional.id}`} professional={professional} />
          })}
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
