import IconSearch from '../IconComponents/IconSearch'
import styles from './InputDashboard.module.css'


interface InputDashboardProps {
  search:string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  placeholder:string
}
const InputDashboard = ({ placeholder,search,setSearch }: InputDashboardProps) => {
  

  return (
    <div className={styles.searchContainer}>
      <IconSearch />
      <input
        maxLength={50}
        className={styles.searchInput}
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default InputDashboard