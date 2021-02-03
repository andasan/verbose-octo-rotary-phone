import FactItem from './FactItem'

import factStyles from '../styles/Fact.module.css'

const FactList = ({ facts }) => {
  return (
    <div className={factStyles.grid}>
      {facts.map((fact) => (
        <FactItem fact={fact} key={fact._id} />
      ))}
    </div>
  )
}

export default FactList
