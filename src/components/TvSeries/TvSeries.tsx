import styles from './TvSeries.module.css'
import Card from '../common/Card/Card'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import { MediaState } from '../../features/media/mediaSlice'
import { useEffect, useState } from 'react'
import InputDashboard from '../common/InputDashboard/InputDashboard'

function TvSeries() {
  const [search, setSearch] = useState<string>('')
  const [filterTV, setFilterTV] = useState<MediaState[]>([])

  const media = useSelector((state: RootState) => state.media)

  useEffect(() => {
    const mediaTV = media.filter((medium: MediaState) => medium.category === "TV Series")

    const results = search ?
      mediaTV.filter(({ title }: MediaState) => title.toLowerCase().includes(search.toLowerCase()))
      : mediaTV

      setFilterTV(results)

  }, [search, media])

  return (
    <div className={styles.tvSeriesContainer}>

      <InputDashboard placeholder='Search for TV series' search={search} setSearch={setSearch} />



      <section className={styles.container}>
        <h3 className={styles.title}>
        {search && filterTV.length > 0 ? `Found ${filterTV.length} ${filterTV.length === 1 ? "result" : "results"} for '${search}'` : search && filterTV.length === 0 ? `No results found for '${search}'` : 'TV Series'}
        </h3>

        <div className={styles.box}>
          {filterTV.map((medium: MediaState) =>
            <Card key={medium.id} data={medium} />
          )}

        </div>
      </section>


    </div>
  )
}

export default TvSeries