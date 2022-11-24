/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {IconUserModel} from '../../../../app/modules/profile/ProfileModels'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Reviews} from '../reviews/Reviews'

type Props = {
  icon: string
  badgeColor: string
  status: string
  statusColor: string
  description: string
  date: string
  budget: string
  progress: number
  users?: Array<IconUserModel>
  firstName: string
  lastName: string
  city: string
  createdAt: string
  phoneNumber1: string
  phoneNumber2: string
  email: string
  onlineStatus: string
  reviews: number
}

const CardProfessional: FC<Props> = ({
  icon,
  badgeColor,
  status,
  statusColor,
  description,
  date,
  budget,
  progress,
  users = undefined,
  firstName,
  lastName,
  city,
  createdAt,
  phoneNumber1,
  phoneNumber2,
  email,
  onlineStatus,
  reviews,
}) => {
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
              {!icon ? (
                <span className={`symbol-label bg-light-white text-info fs-5 fw-bolder`}>
                  {firstName.charAt(0)} {lastName.charAt(0)}
                </span>
              ) : (
                <img alt='Pic' src={toAbsoluteUrl(icon)} />
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
                &nbsp;&nbsp; {`${firstName} ${lastName}`}
              </a>
              <span className='text-muted fw-semibold'>&nbsp;&nbsp;&nbsp;{city}</span>
            </div>
            {/* end:Title */}
          </div>
          {/* begin:Info */}
        </div>
        {/* end::Heading */}
      </div>
      <div className='separator my-4'></div>
      <div className='card-body p-9'>
        {/* begin::Coordinates */}
        <div className='d-flex align-items-center flex-wrap mb-5 mt-auto fs-6'>
          <i className='bi bi-circle-fill text-info fs-4' />
          <div className={`fw-bolder me-2 text-white`}>&nbsp; </div>
          <Reviews reviews={reviews}></Reviews>
          <div className={`fw-bolder me-2 text-white`}>&nbsp; ({reviews}) Review &nbsp;</div>
        </div>
        <div className='d-flex align-items-center flex-wrap mb-5 mt-auto fs-6'>
          <i className='bi bi-circle-fill text-info fs-4' />
          <div className={`fw-bolder me-2 text-white`}>&nbsp; Phone &nbsp;</div>
          <div className='fw-bold '> {phoneNumber1}</div>
        </div>

        <div className='d-flex align-items-center flex-wrap mb-5 mt-auto fs-6'>
          <i className='bi bi-circle-fill text-info fs-4' />
          <div className={`fw-bolder me-2 text-white`}>&nbsp; Email &nbsp; &nbsp;</div>
          <div className='fw-bold  '> {email}</div>
        </div>
        {/* end::Coordinates */}
        <div className='separator my-5'></div>
        {/* begin:Services */}
        <div className='d-flex flex-column mb-5'>
          <div className='text-dark me-2 fw-bold pb-4'>Services</div>

          <div className='d-flex'>
            <a
              href='#'
              className='symbol symbol-35px me-2'
              data-bs-toggle='tooltip'
              title='Ana Stone'
            >
              <img src={toAbsoluteUrl('/media/stock/600x400/img-19.jpg')} alt='' />
            </a>

            <a
              href='#'
              className='symbol symbol-35px me-2'
              data-bs-toggle='tooltip'
              title='Mark Larson'
            >
              <img src={toAbsoluteUrl('/media/stock/600x400/img-24.jpg')} alt='' />
            </a>

            <a
              href='#'
              className='symbol symbol-35px me-2'
              data-bs-toggle='tooltip'
              title='Sam Harris'
            >
              <img src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')} alt='' />
            </a>

            <a href='#' className='symbol symbol-35px' data-bs-toggle='tooltip' title='Alice Micto'>
              <img src={toAbsoluteUrl('/media/stock/600x400/img-17.jpg')} alt='' />
            </a>
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
            Contact
          </a>
        </div>
      </div>
    </Link>
  )
}

export {CardProfessional}
