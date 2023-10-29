import Bookmark from '../Bookmark/Bookmark'
import IconDot from '../IconComponents/IconDot'
import IconCategoryMovie from '../IconComponents/IconCategoryMovie'
import styles from './TrendingCard.module.css'
import { useState } from 'react'
import IconPlay from '../IconComponents/IconPlay'
import { MediaState, toggleBookmark } from '../../../features/media/mediaSlice'
import IconCategoryTV from '../IconComponents/IconCategoryTV'
import { useDispatch } from 'react-redux'

type TrendingCardProps = {
  data: MediaState
}

const TrendingCard = ({ data }: TrendingCardProps) => {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(${data.thumbnail.trending?.large})` }}
      className={styles.card}
    >
      {isHovered && (
        <div
          className={styles.hoverOverlay}
        >
          <div className={styles.playButtonContainer} >
            <IconPlay />
            <p className={styles.playButtonText} >Play</p>
          </div>
        </div>
      )}

      <Bookmark
        isBookmark={data.isBookmarked}
        onMouseEnter={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(true)}
        onClick={() => dispatch(toggleBookmark(data.id))}
      />
      <div className={styles.detailsContainer} >
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
        <p className={styles.movieTitle} >{data.title}</p>
      </div>
    </div>
  )
}

export default TrendingCard