import styles from './Bookmark.module.css'
import IconBookmarkEmpty from "../IconComponents/IconBookmarkEmpty"
import IconBookmarkFull from "../IconComponents/IconBookmarkFull"

type BookmarkProps = {
  isBookmark: boolean
  right?: string
  onMouseEnter: any
  onMouseLeave:any
  onClick:any
}

const Bookmark = ({ isBookmark = false, right = "24px", onMouseEnter,onMouseLeave,onClick }: BookmarkProps) => {
  return (
    <div
      className={styles.stylesBookmark}
      style={{ top: "16px", right: right }}
      onMouseEnter={()=>onMouseEnter()}
      onMouseLeave={()=>onMouseLeave()}
      onClick={()=>onClick()}
    >
      {(isBookmark) ? <IconBookmarkFull />
        : <IconBookmarkEmpty />}
    </div>
  )
}

export default Bookmark