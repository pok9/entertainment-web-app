import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Home.module.css'
import TrendingCard from '../common/Trending/TrendingCard'
import Card from '../common/Card/Card'
import { RootState } from '../../app/store'
import { MediaState } from '../../features/media/mediaSlice'
import InputDashboard from '../common/InputDashboard/InputDashboard'

function Home() {
  const [search, setSearch] = useState<string>('')

  const media = useSelector((state: RootState) => state.media)
  const [filterTrending, setFilterTrending] = useState<MediaState[]>([])
  const [filterRecommended, setFilterRecommended] = useState<MediaState[]>([])

  useEffect(() => {
    const mediaTrending = media.filter((medium: MediaState) => medium.isTrending)
    const mediaRecommended = media.filter((medium: MediaState) => !medium.isTrending)

    const resultTrending = search ?
      mediaTrending.filter(({ title }: MediaState) => title.toLowerCase().includes(search.toLowerCase()))
      : mediaTrending

    const resultRecommended = search ?
      mediaRecommended.filter(({ title }: MediaState) => title.toLowerCase().includes(search.toLowerCase()))
      : mediaRecommended

    setFilterTrending(resultTrending)
    setFilterRecommended(resultRecommended)

  }, [search, media])

  return (
    <div className={styles.homeContainer}>

      <InputDashboard placeholder='Search for movies or TV series' search={search} setSearch={setSearch} />

      {search ? <section className={styles.container}>
        <h3 className={styles.title}>
          {(search && filterTrending.length > 0 || filterRecommended.length > 0)
            ? `Found ${filterTrending.length + filterRecommended.length} ${(filterTrending.length + filterRecommended.length) === 1
              ? "result"
              : "results"} for '${search}'`
            : (search && (filterTrending.length + filterRecommended.length) === 0)
              ? `No results found for '${search}'`
              : null}
        </h3>
        <div className={styles.box}>
          {filterTrending.map((medium: MediaState) => <Card key={medium.id} data={medium} />)}
          {filterRecommended.map((medium: MediaState) => <Card key={medium.id} data={medium} />)}
        </div>
      </section>

        : <div>
          <section className={styles.trendingContainer}>
            <h3 className={styles.trendingTitle}>Trending</h3>
            <div className={styles.cardContainer}>
              {filterTrending.map((medium: MediaState) =>
                <TrendingCard key={medium.id} data={medium} />
              )}
            </div>
          </section>

          <section className={styles.container}>
            <h3 className={styles.title}>Recommended for you</h3>
            <div className={styles.box} >

              {filterRecommended.map((medium: MediaState) =>
                <Card key={medium.id} data={medium} />
              )}

            </div>
          </section>
        </div>}


    </div>
  )
}

export default Home