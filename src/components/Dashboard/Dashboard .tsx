import { useState } from "react"

import styles from './Dashboard.module.css'
import { NavbarSelection } from "../../types/homeTypes"
import IconNavHome from "../common/IconComponents/IconNavHome"
import IconNavMovies from "../common/IconComponents/IconNavMovies"
import IconNavTvSeries from "../common/IconComponents/IconNavTvSeries"
import IconNavBookmark from "../common/IconComponents/IconNavBookmark"
import logo from '../../assets/logo.svg'
import imageAvatar from '../../assets/image-avatar.png'
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Routes } from "../../routes/routes"


const Dashboard = () => {
  let navigate = useNavigate();
  const location = useLocation();

  // ตั้งค่าเริ่มต้นของ navbarSelected ตาม path ปัจจุบัน
  const getCurrentSelection = (): NavbarSelection => {
    switch (location.pathname) {
      case Routes.HOME:
        return NavbarSelection.Home;
      case Routes.MOVIES:
        return NavbarSelection.Movies;
      case Routes.TV_SERIES:
        return NavbarSelection.TvSeries;
      case Routes.BOOKMARK:
        return NavbarSelection.Bookmark;
      default:
        return NavbarSelection.Home;
    }
  };

  const [navberSelected, setNavbarSelected] = useState<NavbarSelection>(getCurrentSelection());

  const handleClickNavbar = (val: NavbarSelection) => {
    setNavbarSelected(val)

    if (NavbarSelection.Home == val) {
      navigate(Routes.HOME)
    } else if (NavbarSelection.Movies == val) {
      navigate(Routes.MOVIES)
    } else if (NavbarSelection.TvSeries == val) {
      navigate(Routes.TV_SERIES)
    } else if (NavbarSelection.Bookmark == val) {
      navigate(Routes.BOOKMARK)
    } else {
      navigate(Routes.HOME)
    }

  }

  return (
    <div className={styles.mainContainer} >
      <div>
        <div className={styles.navbarContainer}>
          <div className={styles.navContainer}>
            <img src={logo} alt="logo" />
            <div
              className={styles.logoContainer}
            >
              <IconNavHome
                tag={NavbarSelection.Home}
                navberSelected={navberSelected}
                onClickNavbar={handleClickNavbar}
              />
              <IconNavMovies
                tag={NavbarSelection.Movies}
                navberSelected={navberSelected}
                onClickNavbar={handleClickNavbar}
              />
              <IconNavTvSeries
                tag={NavbarSelection.TvSeries}
                navberSelected={navberSelected}
                onClickNavbar={handleClickNavbar}
              />
              <IconNavBookmark
                tag={NavbarSelection.Bookmark}
                navberSelected={navberSelected}
                onClickNavbar={handleClickNavbar}
              />
            </div>
          </div>
          <img
            className={styles.avatar}
            src={imageAvatar}
            alt="imageAvatar"
          />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Dashboard 