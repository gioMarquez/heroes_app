import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../../ui/components/Navbar'
import { DcPage, HeroPage, MarvelPage, MhaPage, SearchPage } from '../pages'

const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div className='mx-20 my-12'>

        <Routes>
                <Route path="marvel" element={ <MarvelPage />} />
                <Route path="dc" element={ <DcPage />} />
                <Route path="mha" element={ <MhaPage />} />
                <Route path="search" element={ <SearchPage />} />
                <Route path="hero" element={ <HeroPage />} />
                {/* Search,  heroById */}

                <Route path="/" element={ <Navigate to="/marvel" />} />
        </Routes>
        </div>

    </>
  )
}

export default HeroesRoutes