/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {IconUserModel} from '../../../../app/modules/profile/ProfileModels'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Reviews} from '../reviews/Reviews'
import {ProfessionalModel} from '../../../../app/TSModels/Professionals/ProfessionalModel'
import {ServiceAwesomeIcon} from '../../../../app/modules/services/helper'
import {format} from 'react-string-format'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid, regular, brands, icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const CardProfessional: FC<ProfessionalModel> = (data: ProfessionalModel) => {
  const {
    avatar,
    first_name,
    last_name,
    reviews,
    isProfessional,
    entityType,
    city,
    onlineStatus,
    services,
  } = data
  return (
    <Link
      to='/crafted/pages/profile/overview'
      className='card border border-2 border-gray-300 border-hover'
    >
      <div className='card-header border-0 pt-9'>
        {/* begin::Heading */}
        <div className='d-flex flex-stack'>
          {/* begin:Info */}
          <div className='d-flex align-items-center'>
            {/* begin:Image */}
            <div className='symbol symbol-75px symbol-circle'>
              {!avatar ? (
                <span className={`symbol-label bg-light-white text-dark fs-5 fw-bolder`}>
                  {first_name.charAt(0)} {last_name.charAt(0)}
                </span>
              ) : (
                <img alt='Pic' src={toAbsoluteUrl(avatar)} />
              )}
              {onlineStatus && onlineStatus === 'online' && (
                <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
              )}
              {onlineStatus && onlineStatus === 'offline' && (
                <div className='symbol-badge bg-danger start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
              )}
              {onlineStatus && onlineStatus === 'unknown' && (
                <div className='symbol-badge bg-secondary start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
              )}
            </div>
            {/* end:Image */}

            {/* begin:Title */}
            <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3'>
              <a href='#' className='text-dark fw-bolder  text-hover-primary fs-3'>
                &nbsp;&nbsp; {`${first_name} ${last_name}`}
              </a>
              <span className='fw-semibold text-dark'>
                &nbsp;&nbsp;&nbsp;
                <KTSVG
                  path='/media/icons/duotune/maps/map008.svg'
                  className='svg-icon-1 svg-icon-danger'
                />
                {city}
              </span>

              {entityType == 'company' && (
                <span className='text-dark fw-semibold'>
                  &nbsp;&nbsp;&nbsp;
                  <KTSVG
                    path='/media/icons/duotune/general/gen026.svg'
                    className='svg-icon-1 svg-icon-primary'
                  />
                  &nbsp;Company
                </span>
              )}
              {entityType == 'particular' && (
                <span className='text-dark fw-semibold'>
                  &nbsp;&nbsp;&nbsp;
                  <KTSVG
                    path='/media/icons/duotune/general/gen026.svg'
                    className='svg-icon-1 svg-icon-secondary'
                  />
                  &nbsp;Particular
                </span>
              )}
            </div>
            {/* end:Title */}
          </div>
          {/* begin:Info */}
        </div>
        {/* end::Heading */}
      </div>

      <div className='card-body p-9'>
        {/* begin::Coordinates */}
        <div className='d-flex align-items-center flex-wrap mb-5 mt-auto fs-6'>
          <div className={`fw-bolder me-2 text-dark`}>&nbsp; Note :</div>
          <Reviews reviews={reviews}></Reviews>
          <div className={`fw-bolder me-2 text-dark`}>&nbsp; ({reviews}) Review &nbsp;</div>
        </div>
        {/* end::Coordinates */}
        <div className='separator my-5'></div>
        {/* begin:Services */}
        <div className='d-flex flex-column mb-5'>
          <div className='text-dark me-2 fw-bold pb-4'>Services</div>

          <div className='d-flex'>
            {services &&
              services.map((service) => {
                return (
                  <i className={format(' me-4 text-primary')}>
                    {' '}
                    <ServiceAwesomeIcon serviceName={service} />
                  </i>
                )
              })}
          </div>
        </div>
        {/* end:Team */}
        <div className='separator my-5'></div>
        <div
          className='h-4px w-100 bg-light mb-5'
          data-bs-toggle='tooltip'
          title='This project completed'
        >
          {' '}
          <a href='#' className={`btn btn-info w-100 py-3`}>
            Profil
          </a>
        </div>
      </div>
    </Link>
  )
}

export {CardProfessional}
