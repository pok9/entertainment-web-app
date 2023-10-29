import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './Movies.module.css'
import Card from '../common/Card/Card'
import { RootState } from '../../app/store'
import { MediaState } from '../../features/media/mediaSlice'
import InputDashboard from '../common/InputDashboard/InputDashboard'

function Movies() {
  const [search, setSearch] = useState<string>('')
  const [filterMovies, setFilterMovies] = useState<MediaState[]>([])

  const media = useSelector((state: RootState) => state.media)
  
  useEffect(() => {
    const mediaMovies = media.filter((medium: MediaState) => medium.category === "Movie")

    const results = search ?
      mediaMovies.filter(({ title }: MediaState) => title.toLowerCase().includes(search.toLowerCase()))
      : mediaMovies

    setFilterMovies(results)
  }, [search, media])

  return (
    <div className={styles.moviesContainer} >
      <InputDashboard placeholder='Search for movies' search={search} setSearch={setSearch} />

      <section className={styles.container}>
        <h3 className={styles.title}>
          {search && filterMovies.length > 0 ? `Found ${filterMovies.length} ${filterMovies.length === 1 ? "result" : "results"} for '${search}'` : search && filterMovies.length === 0 ? `No results found for '${search}'` : 'Movies'}
        </h3>
        <div className={styles.box}>
          {filterMovies.map((medium: MediaState) => <Card key={medium.id} data={medium} />)}
        </div>
      </section>


    </div>
  )
}

export default Movies