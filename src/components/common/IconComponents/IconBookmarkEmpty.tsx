import styles from './IconBookmarkEmpty.module.css'
interface IconBookmarkEmpty {
}
function IconBookmarkEmpty({ }: IconBookmarkEmpty) {
  return (
    <svg
      width="12"
      height="14"
      className={styles.iconBookmarkEmpty}
      xmlns="http://www.w3.org/2000/svg">
      <path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" />
    </svg>
  )
}

export default IconBookmarkEmpty