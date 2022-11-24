/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { KTSVG } from '../../../helpers'

type Props = {
  reviews: number
}

const Reviews2: FC<Props> = ({
    reviews = 0,
}) => {
  return (
    <div className='rating'>
            <div className='rating-label checked'>
              <KTSVG
                path='/media/icons/duotune/general/gen029.svg'
                className='svg-icon svg-icon-1'
              />
            </div>
            <div className='rating-label checked'>
              <KTSVG
                path='/media/icons/duotune/general/gen029.svg'
                className='svg-icon svg-icon-1'
              />
            </div>
            <div className='rating-label '>
              <KTSVG
                path='/media/icons/duotune/general/gen029.svg'
                className='svg-icon svg-icon-1'
              />
            </div>
            <div className='rating-label '>
              <KTSVG
                path='/media/icons/duotune/general/gen029.svg'
                className='svg-icon svg-icon-1'
              />
            </div>
            <div className='rating-label '>
              <KTSVG
                path='/media/icons/duotune/general/gen029.svg'
                className='svg-icon svg-icon-1'
              />
            </div>
          </div>
  )
}

export {Reviews2}
