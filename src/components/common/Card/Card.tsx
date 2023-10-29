import { useState } from "react"

import styles from './Card.module.css'
import Bookmark from "../Bookmark/Bookmark"
import IconCategoryMovie from "../IconComponents/IconCategoryMovie"
import IconDot from "../IconComponents/IconDot"
import IconPlay from "../IconComponents/IconPlay"
import { MediaState, toggleBookmark } from "../../../features/media/mediaSlice"
import IconCategoryTV from "../IconComponents/IconCategoryTV"
import { useDispatch } from "react-redux"

type CardProps = {
  data: MediaState
}
const Card = ({ data }: CardProps) => {
  const dispatch = useDispatch()
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${data.thumbnail.regular.large || data.thumbnail.regular.medium || data.thumbnail.regular.small})`,
        }}>
        {isHovered && (
          <div className={styles.hoverOverlay}>
            <div className={styles.playButtonContainer}>
              <IconPlay />
              <p className={styles.playButtonText}>Play</p>
            </div>
          </div>
        )}
        <Bookmark
          isBookmark={data.isBookmarked}
          right={"16px"}
          onMouseEnter={() => setIsHovered(false)}
          onMouseLeave={() => setIsHovered(true)}
          onClick={() => dispatch(toggleBookmark(data.id))}
        />
      </div>
      <div >
        <div className={styles.movieDetails}>
          <p>{data.year}</p>
          <IconDot />
          <p>
            {(data.category === "Movie") ? <IconCategoryMovie /> : (data.category === "TV Series") ? <IconCategoryTV /> : null}
            {data.category}
          </p>
          <IconDot />
          <p>{data.rating}</p>
        </div>
        <p className={styles.movieTitle}>{data.title}</p>
      </div>
    </div>
  )
}

export default Card