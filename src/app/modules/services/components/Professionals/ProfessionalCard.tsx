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
        <CardProfessional
        icon='/media/avatars/300-6.jpg'
        badgeColor='primary'
        status='In Progress'
        statusColor='primary'
        description='Keenthemes uses the latest and greatest frameworks<br/>with ReactJS for complete modernization and<br/>future.'
        date='November 10, 2021'
        budget='$284,900.00'
        progress={50}
        users={users1}
        firstName={professional.first_name}
        lastName={professional.last_name}
        city={professional.city}
        createdAt ={professional.createdAt}
        phoneNumber1={professional.phoneNumber1}
        phoneNumber2={professional.phoneNumber2}
        email={professional.email}
        onlineStatus={professional.onlineStatus}
        reviews={professional.reviews}
        />
    </div>
  )
}

const users1: Array<IconUserModel> = [
  {name: 'Emma Smith', avatar: '/media/avatars/300-6.jpg'},
  {name: 'Rudy Stone', avatar: '/media/avatars/300-1.jpg'},
  {name: 'Susan Redwood', initials: 'S', color: 'primary'},
]

export {ProfessionalCard} 
