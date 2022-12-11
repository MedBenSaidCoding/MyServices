import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon, IconMacroParams } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FC } from 'react'

type Props={
 serviceName:string
}
const ServiceAwesomeIcon: FC<Props> = (props:Props) => {

  switch (props.serviceName) {
    case 'Déménagement':
      return( <FontAwesomeIcon icon={icon({name: "truck", style: 'solid'})}  size="xl" fixedWidth flip="horizontal" />)
    case 'Bricolage':
      return( <FontAwesomeIcon icon={solid('toolbox')} size="xl" fixedWidth />)
    case 'Ménage':
      return( <FontAwesomeIcon icon={solid("broom")}  size="xl" fixedWidth flip="horizontal" />)
    case 'Jardinage':
      return( <FontAwesomeIcon icon={solid("tree")}  size="xl" fixedWidth flip="horizontal" />)
    case 'Informatique':
      return( <FontAwesomeIcon icon={icon({name: "computer", style: 'solid'})}  size="xl" fixedWidth flip="horizontal" />)
    case 'Cours particuliers':
      return( <FontAwesomeIcon icon={solid('person-chalkboard')}  size="xl" fixedWidth flip="horizontal" />)
    case 'Animaux':
      return( <FontAwesomeIcon icon={solid('cat')} size="xl" fixedWidth />)
    default:
      return( <FontAwesomeIcon icon={icon({name: "coffee", style: 'solid'})}  size="xl" fixedWidth flip="horizontal" />)
  }
}

export {ServiceAwesomeIcon};
