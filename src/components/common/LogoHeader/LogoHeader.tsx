import logo from '/assets/logo.svg'
import styles from './LogoHeader.module.css'
const LogoHeader = () => {
  return (
    <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default LogoHeader