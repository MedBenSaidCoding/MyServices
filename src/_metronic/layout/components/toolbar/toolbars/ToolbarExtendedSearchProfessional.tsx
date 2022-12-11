/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProfessionalsRequest} from '../../../../../app/redux/action-creators/professionals'
import {RootState} from '../../../../../app/redux/reducers/rootReducer'
import {SearchFilterModel} from '../../../../../app/TSModels/Professionals/SearchFilterModel'
import {KTSVG, toAbsoluteUrl} from '../../../../helpers'
import {Dropdown1} from '../../../../partials'

const ToolbarExtendedSearchProfessional: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    document.body.setAttribute('data-kt-app-toolbar-fixed', 'true')
  }, [])

  const initFilter = {city: 'All', service: 'All', sortBy: 'Score'}
  const [data, setData] = useState<SearchFilterModel>(initFilter)

  const applyFilter = (fieldsToUpdate: Partial<SearchFilterModel>) => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
    dispatch(fetchProfessionalsRequest(updatedData))
  }

  return (
    <>
      <div className='d-flex align-items-center flex-shrink-0 me-5'>
        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 pe-4 d-none d-md-block'>Top 10 :</span>
        {/* end::Label */}

        {/* begin::Users */}
        <div className='symbol-group symbol-hover flex-shrink-0 me-2'>
          {/* begin::User */}
          <div className='symbol symbol-circle symbol-35px'>
            <img src={toAbsoluteUrl('/media/avatars/300-1.jpg')} alt='' />
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-35px'>
            <img src={toAbsoluteUrl('/media/avatars/300-2.jpg')} alt='' />
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-35px'>
            <div className='symbol-label fw-bold bg-primary text-inverse-primary'>S</div>
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-35px'>
            <img src={toAbsoluteUrl('/media/avatars/300-5.jpg')} alt='' />
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-35px'>
            <div className='symbol-label fw-bold bg-danger text-inverse-danger'>P</div>
          </div>
          {/* end::User */}

          {/* begin::User */}
          <div className='symbol symbol-circle symbol-35px'>
            <img src={toAbsoluteUrl('/media/avatars/300-20.jpg')} alt='' />
          </div>
          {/* end::User */}
        </div>
        {/* end::Users */}

        {/* begin::Button */}
        <div
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Invite a team member'
        ></div>
      </div>
      {/* end::Button */}
      {/* end::Toolbar start */}

      {/* begin::Toolbar end */}
      <div className='d-flex align-items-center overflow-auto'>
        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 flex-shrink-0 pe-4 d-none d-md-block'>
          City:
        </span>
        {/* end::Label */}

        {/* begin::Select */}
        <select
          className='form-select form-select-sm w-125px form-select-solid me-6'
          data-control='select2'
          data-placeholder='Latest'
          data-hide-search='true'
          value={data.city}
          onChange={(e) => applyFilter({city: e.target.value})}
        >
          <option value='All'>All</option>
          <option value='Meknes'>Meknes</option>
          <option value='Rabat'>Rabat</option>
          <option value='Tanger'>Tanger</option>
        </select>
        {/* end::Select */}

        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 flex-shrink-0 pe-4 d-none d-md-block'>
          Service:
        </span>
        {/* end::Label */}

        {/* begin::Select */}
        <select
          className='form-select form-select-sm w-125px form-select-solid me-6'
          data-control='select2'
          data-placeholder='Latest'
          data-hide-search='true'
          value={data.service}
          onChange={(e) => applyFilter({service: e.target.value})}
        >
          <option value='All'>All</option>
          <option value='Jardinage'>Jardinage</option>
          <option value='Informatique'>Informatique</option>
          <option value='Bricolage'>Bricolage</option>
          <option value='Ménage'>Ménage</option>
          <option value='Cours particuliers'>Cours particuliers</option>
          <option value='Animaux'>Animaux</option>
        </select>
        {/* end::Select */}

        {/* begin::Separartor */}
        <div className='bullet bg-secondary h-35px w-1px mx-6'></div>
        {/* end::Separartor */}

        {/* begin::Label */}
        <span className='fs-7 fw-bold text-gray-700 flex-shrink-0 pe-4 d-none d-md-block'>
          Sort By:
        </span>
        {/* end::Label */}

        {/* begin::Select */}
        <select
          className='form-select form-select-sm w-125px form-select-solid me-6'
          data-control='select2'
          data-placeholder='Latest'
          data-hide-search='true'
          value={data.sortBy}
          onChange={(e) => applyFilter({sortBy: e.target.value})}
        >
          <option value='Seniority'>Seniority</option>
          <option value='Score'>Score</option>
          <option value='Finalised project'>Finalised project</option>
        </select>
        {/* end::Select */}

        {/* begin::Actions */}
        <div className='d-flex align-items-center'>
          <div className='me-0'>
            <a
              href='#'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
              className='btn btn-sm btn-primary'
            >
              <i className='bi bi-funnel-fill fs-4 me-2'></i>Filter
            </a>
            <Dropdown1 />
          </div>
        </div>
        {/* end::Actions */}
      </div>
    </>
  )
}

export {ToolbarExtendedSearchProfessional}
