/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import { Reviews0 } from './Reviews0'
import { Reviews1 } from './Reviews1'
import { Reviews2 } from './Reviews2'
import { Reviews3 } from './Reviews3'
import { Reviews4 } from './Reviews4'
import { Reviews5 } from './Reviews5'

type Props = {
  reviews: number
}

const Reviews: FC<Props> = ({
    reviews,
}) => {
  return (
  <>
  {reviews && reviews===5  && <Reviews5 reviews={5}></Reviews5>}
  {reviews && reviews>=4 && reviews<5  && <Reviews4 reviews={4}></Reviews4>}
  {reviews && reviews>=3 && reviews<4 && <Reviews3 reviews={3}></Reviews3>}
  {reviews && reviews>=2 && reviews<3 && <Reviews2 reviews={2}></Reviews2>}
  {reviews && reviews>=1 && reviews<2 && <Reviews1 reviews={1}></Reviews1>}
  {reviews && reviews==0 && <Reviews0 reviews={0}></Reviews0>}
  </>
  )
}

export {Reviews}
