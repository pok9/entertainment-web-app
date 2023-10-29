import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Bookmark.module.css'
import Card from '../common/Card/Card'
import { RootState } from '../../app/store'
import { MediaState } from '../../features/media/mediaSlice'
import InputDashboard from '../common/InputDashboard/InputDashboard'

function Bookmark() {
  const [search, setSearch] = useState<string>('')
  const [filterMoviesBM, setFilterMoviesBM] = useState<MediaState[]>([])
  const [filterTVBM, setFilterTVBM] = useState<MediaState[]>([])

  const media = useSelector((state: RootState) => state.media)

  useEffect(() => {
    const mediaMoviesBM = media.filter((medium: MediaState) => medium.category === "Movie" && medium.isBookmarked)
    const mediaTVBM = media.filter((medium: MediaState) => medium.category === "TV Series" && medium.isBookmarked)

    const resultMovies = search ?
      mediaMoviesBM.filter(({ title }: MediaState) => title.toLowerCase().includes(search.toLowerCase()))
      : mediaMoviesBM

    const resultTVBM = search ?
      mediaTVBM.filter(({ title }: MediaState) => title.toLowerCase().includes(search.toLowerCase()))
      : mediaTVBM

    setFilterMoviesBM(resultMovies)
    setFilterTVBM(resultTVBM)
  }, [search, media])


  return (
    <div className={styles.bookmarkContainer} >
      <InputDashboard placeholder='Search for bookmarked shows' search={search} setSearch={setSearch} />

      {search ? <section className={styles.container}>
        <h3 className={styles.title}>
          {(search && filterMoviesBM.length > 0 || filterTVBM.length > 0)
            ? `Found ${filterMoviesBM.length + filterTVBM.length} ${(filterMoviesBM.length + filterTVBM.length) === 1
              ? "result"
              : "results"} for '${search}'`
            : (search && (filterMoviesBM.length + filterTVBM.length) === 0)
              ? `No results found for '${search}'`
              : null}
        </h3>
        <div className={styles.box}>
          {filterMoviesBM.map((medium: MediaState) => <Card key={medium.id} data={medium} />)}
          {filterTVBM.map((medium: MediaState) => <Card key={medium.id} data={medium} />)}
        </div>
      </section>

        : <div>
          {(filterMoviesBM.length !== 0) && <section className={styles.container}>
            <h3 className={styles.title}>Bookmarked Movies</h3>
            <div className={styles.box}>

              {filterMoviesBM.map((medium: MediaState) =>
                <Card key={medium.id} data={medium} />
              )}

            </div>
          </section>}

          {(filterTVBM.length !== 0) && <section className={styles.container}>
            <h3 className={styles.title}>Bookmarked TV Series</h3>
            <div className={styles.box}>

              {filterTVBM.map((medium: MediaState) =>
                <Card key={medium.id} data={medium} />
              )}

            </div>
          </section>}

        </div>}


    </div>
  )
}

export default Bookmark