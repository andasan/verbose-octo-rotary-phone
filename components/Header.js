import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Nyaa</span> Facts
      </h1>
      <p className={headerStyles.description}>“Claws is the laws.”</p>
    </div>
  )
}

export default Header
