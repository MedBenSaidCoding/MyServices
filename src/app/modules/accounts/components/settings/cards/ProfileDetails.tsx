import React, {useState} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {IUserProfileDetails} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../../../../redux/reducers/rootReducer'
import {updateSingleUserRequest} from '../../../../../redux/action-creators/professionals'
import {ProfessionalModel} from '../../../../../TSModels/Professionals/ProfessionalModel'

const profileDetailsSchema = Yup.object().shape({
  first_name: Yup.string().required('First name is required'),
  last_name: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email name is required'),
  phoneNumber1: Yup.string().required('Phone number is required'),
  city: Yup.string().required('City site is required'),
  gender: Yup.string().required('Gender site is required'),
})

const ProfileDetails: React.FC = () => {
  const {loading, currentUser, error, isUpdating, updateOperationStatusSuccess} = useSelector((state: RootState) => state.currentUser)
  const dispatch = useDispatch()

  if (currentUser == undefined) {
    throw new Error('Current user is undefined')
  }

  const initialValues: ProfessionalModel = currentUser

  const [data, setData] = useState<ProfessionalModel>(currentUser)
  const updateData = (fieldsToUpdate: Partial<ProfessionalModel>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loadingForm, setLoading] = useState(false)
  const formik = useFormik<ProfessionalModel>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      values.isProfessional = data.isProfessional
      const updatedData = Object.assign(data, values)
      dispatch(updateSingleUserRequest(updatedData))
      setData(updatedData)
      setLoading(false)
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Profile Details</h3>
        </div>
      </div>
{updateOperationStatusSuccess == true &&    <h1>Toto</h1>}
   

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${toAbsoluteUrl('/media/avatars/blank.png')})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`}}
                  ></div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                      placeholder='First name'
                      {...formik.getFieldProps('first_name')}
                    />
                    {formik.touched.first_name && formik.errors.first_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.first_name}</div>
                      </div>
                    )}
                  </div>

                  <div className='col-lg-6 fv-row'>
                    <input
                      type='text'
                      className='form-control form-control-lg form-control-solid'
                      placeholder='Last name'
                      {...formik.getFieldProps('last_name')}
                    />
                    {formik.touched.last_name && formik.errors.last_name && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>{formik.errors.last_name}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Contact Phone</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='tel'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Phone number'
                  {...formik.getFieldProps('phoneNumber1')}
                />
                {formik.touched.phoneNumber1 && formik.errors.phoneNumber1 && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.phoneNumber1}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>Email</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='Company website'
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.email}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>
                <span className='required'>City</span>
              </label>

              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg fw-bold'
                  {...formik.getFieldProps('city')}
                >
                  <option value=''>Select a city...</option>
                  <option value='Meknes'>Meknes</option>
                  <option value='Fes'>Fes</option>
                  <option value='Rabat'>Rabat</option>
                  <option value='Tanger'>Tanger</option>
                </select>
                {formik.touched.city && formik.errors.city && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.city}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Gender</label>
              <div className='col-lg-8 fv-row'>
                <select
                  className='form-select form-select-solid form-select-lg'
                  {...formik.getFieldProps('gender')}
                >
                  <option value=''>Select your gender ...</option>
                  <option value='M'>M</option>
                  <option value='F'>F</option>
                </select>
                {formik.touched.gender && formik.errors.gender && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.gender}</div>
                  </div>
                )}

                <div className='form-text'>
                  Please select a preferred language, including date, time, and number formatting.
                </div>
              </div>
            </div>

            <div className='row mb-0'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Professional account</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='isProfessional'
                    defaultChecked={data.isProfessional}
                    disabled
                    onChange={() => {
                      updateData({isProfessional: !data.isProfessional})
                    }}
                  />
                  <label className='form-check-label'></label>
                </div>
              </div>
            </div>
            <div className='row mb-0'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Company account</label>

              <div className='col-lg-8 d-flex align-items-center'>
                <div className='form-check form-check-solid form-switch fv-row'>
                  <input
                    className='form-check-input w-45px h-30px'
                    type='checkbox'
                    id='isCompany'
                    disabled
                    defaultChecked={data.entityType=="company"?true:false}
                    onChange={() => {
                      updateData({entityType: data.entityType})
                    }}
                  />
                  <label className='form-check-label'></label>
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              type='submit'
              onClick={() => {
                console.log(formik.errors)
              }}
              className='btn btn-primary'
            >
              {!loadingForm && 'Save Changes'}
              {loadingForm && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {ProfileDetails}
