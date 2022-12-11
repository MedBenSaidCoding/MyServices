/* eslint-disable jsx-a11y/anchor-is-valid */
import {CardProfessional} from '../../../../../_metronic/partials/content/cards/CardProfessional'
import {IconUserModel} from '../../../../TSModels/Professionals/ProfileModels'
import { ProfessionalModel } from '../../../../TSModels/Professionals/ProfessionalModel';
import { FC } from 'react';

type Props = {
  professional:ProfessionalModel
}
const ProfessionalCard:FC<Props> = ({professional})=>{

  return (
    <div className='col-md-6 col-xl-4'>
        <CardProfessional {...professional} ></CardProfessional>
       
        
    </div>
  )
}

export {ProfessionalCard} 
