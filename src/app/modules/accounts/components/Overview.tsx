/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../../_metronic/helpers'
import {
  ChartsWidget1,
  TablesWidget1,
  ListsWidget5,
  TablesWidget5,
} from '../../../../_metronic/partials/widgets'
import {RootState} from '../../../redux/reducers/rootReducer'

export function Overview() {
  const {loading, currentUser, error} = useSelector((state: RootState) => state.currentUser)

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          <Link to='/crafted/account/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link>
        </div>

        {!loading && error == null && currentUser && (
          <div className='card-body p-9'>
            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>
                  {currentUser.first_name + ' ' + currentUser.last_name}
                </span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Company</label>

              <div className='col-lg-8 fv-row'>
                <span className='fw-bold fs-6'>Keenthemes</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>
                Contact Phone
                <i
                  className='fas fa-exclamation-circle ms-1 fs-7'
                  data-bs-toggle='tooltip'
                  title='Phone number must be active'
                ></i>
              </label>

              <div className='col-lg-8 d-flex align-items-center'>
                <span className='fw-bolder fs-6 me-2'>{currentUser.phoneNumber1}</span>

                <span className='badge badge-success'>Verified</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Company Site</label>

              <div className='col-lg-8'>
                <a href='#' className='fw-bold fs-6 text-dark text-hover-primary'>
                  keenthemes.com
                </a>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>
                City
                <i
                  className='fas fa-exclamation-circle ms-1 fs-7'
                  data-bs-toggle='tooltip'
                  title='Country of origination'
                ></i>
              </label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>{currentUser.city}</span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Email</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>{currentUser.email}</span>
              </div>
            </div>

            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>Is a professional account</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{currentUser.isProfessional?"Yes":"No"}</span>
              </div>
              
            </div>
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>Is company account</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{currentUser.entityType=="company"?"Yes":"No"}</span>
              </div>
              
            </div>

            <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
              <KTSVG
                path='icons/duotune/general/gen044.svg'
                className='svg-icon-2tx svg-icon-warning me-4'
              />
              <div className='d-flex flex-stack flex-grow-1'>
                <div className='fw-bold'>
                  <h4 className='text-gray-800 fw-bolder'>We need your attention!</h4>
                  <div className='fs-6 text-gray-600'>
                    Your payment was declined. To start using tools, please
                    <Link className='fw-bolder' to='/crafted/account/settings'>
                      {' '}
                      Add Payment Method
                    </Link>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>
    </>
  )
}
