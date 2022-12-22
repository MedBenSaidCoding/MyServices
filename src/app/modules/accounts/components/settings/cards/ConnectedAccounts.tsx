/* eslint-disable jsx-a11y/anchor-is-valid */
import {useFormik} from 'formik'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {KTSVG, toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {RootState} from '../../../../../redux/reducers/rootReducer'
import {ProfessionalModel} from '../../../../../TSModels/Professionals/ProfessionalModel'
import {IConnectedAccounts, connectedAccounts} from '../SettingsModel'
import * as Yup from 'yup'
import {updateSingleUserRequest} from '../../../../../redux/action-creators/professionals'

const ConnectedAccounts: React.FC = () => {
  const {currentUser, error, isUpdating, updateOperationStatusSuccess} = useSelector(
    (state: RootState) => state.currentUser
  )
  const dispatch = useDispatch()

  if (currentUser == undefined) {
    throw new Error('Current user is undefined')
  }

  const initialValues: ProfessionalModel = currentUser

  const [data, setData] = useState<ProfessionalModel>(currentUser)

  const updateData = (fieldsToUpdate: Partial<ProfessionalModel>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)

  const profileDetailsSchema = Yup.object().shape({
    services: Yup.array().required('First name is required'),
  })

  const formik = useFormik<ProfessionalModel>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      //const updatedData = Object.assign(data, values)
      dispatch(updateSingleUserRequest(data))
      setData(data)
      setLoading(false)
    },
  })

  const click = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_connected_accounts'
        aria-expanded='true'
        aria-controls='kt_account_connected_accounts'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>The services offered</h3>
        </div>
      </div>

      <div id='kt_account_connected_accounts' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6'>
              <KTSVG
                path='/media/icons/duotune/art/art006.svg'
                className='svg-icon-2tx svg-icon-primary me-4'
              />
              <div className='d-flex flex-stack flex-grow-1'>
                <div className='fw-bold'>
                  <div className='fs-6 text-gray-600'>
                    Please select the services you want to offer for your customers.
                    <a href='#' className='fw-bolder'>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='py-2'>
              <div className='d-flex flex-stack'>
                <div className='d-flex'>
                <i className="w-30px me-6 bi bi-box2-fill text-primary fs-2hx"></i>

                  <div className='d-flex flex-column'>
                    <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                      Déménagement
                    </a>
                    <div className='fs-6 fw-bold text-gray-400'>Plan properly your workflow</div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-45px h-30px'
                      type='checkbox'
                      id='googleswitch'
                      checked={data.services.includes('Déménagement') ? true : false}
                      onChange={() =>
                        updateData({
                          services: !data.services.includes('Déménagement')
                            ? [...data.services, 'Déménagement']
                            : [
                                ...data.services.filter((item) => {
                                  return item != 'Déménagement'
                                }),
                              ],
                        })
                      }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed my-5'></div>

              <div className='d-flex flex-stack'>
                <div className='d-flex'>
                <i className="w-30px me-6 bi bi-mortarboard-fill text-primary fs-2hx"></i>

                  <div className='d-flex flex-column'>
                    <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                    Cours de Soutien Scolaire
                    </a>
                    <div className='fs-6 fw-bold text-gray-400'>Plan properly your workflow</div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-45px h-30px'
                      type='checkbox'
                      id='googleswitch'
                      checked={data.services.includes('TutoringCourses') ? true : false}
                      onChange={() =>
                        updateData({
                          services: !data.services.includes('TutoringCourses')
                            ? [...data.services, 'TutoringCourses']
                            : [
                                ...data.services.filter((item) => {
                                  return item != 'TutoringCourses'
                                }),
                              ],
                        })
                      }
                    />
                    <label className='form-check-label' htmlFor='googleswitch'></label>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed my-5'></div>

              <div className='d-flex flex-stack'>
                <div className='d-flex'>
                
                <i className="w-30px me-6 bi bi-trash3-fill text-danger fs-2hx"></i>

                  <div className='d-flex flex-column'>
                    <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                      Ménage
                    </a>
                    <div className='fs-6 fw-bold text-gray-400'>
                      Keep eye on on your Repositories
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-45px h-30px'
                      type='checkbox'
                      id='githubswitch'
                      checked={data.services.includes('Ménage') ? true : false}
                      onChange={() =>
                        updateData({
                          services: !data.services.includes('Ménage')
                            ? [...data.services, 'Ménage']
                            : [
                                ...data.services.filter((item) => {
                                  return item != 'Ménage'
                                }),
                              ],
                        })
                      }
                    />
                    <label className='form-check-label' htmlFor='githubswitch'></label>
                  </div>
                </div>
              </div>

              <div className='separator separator-dashed my-5'></div>

              <div className='d-flex flex-stack'>
                <div className='d-flex'>
                
 <i className="w-30px me-6 bi bi-tools text-warning fs-2hx"></i>
                  <div className='d-flex flex-column'>
                    <a href='#' className='fs-5 text-dark text-hover-primary fw-bolder'>
                      Bricolage
                    </a>
                    <div className='fs-6 fw-bold text-gray-400'>Integrate Projects Discussions</div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <div className='form-check form-check-solid form-switch'>
                    <input
                      className='form-check-input w-45px h-30px'
                      type='checkbox'
                      checked={data.services.includes('Bricolage') ? true : false}
                      onChange={() =>
                        updateData({
                          services: !data.services.includes('Bricolage')
                            ? [...data.services, 'Bricolage']
                            : [
                                ...data.services.filter((item) => {
                                  return item != 'Bricolage'
                                }),
                              ],
                        })
                      }
                    />
                    <label className='form-check-label' htmlFor='slackswitch'></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button className='btn btn-light btn-active-light-primary me-2'>Discard</button>
            <button type='submit' className='btn btn-primary'>
              {!loading && 'Save Changes'}
              {loading && (
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

export {ConnectedAccounts}
