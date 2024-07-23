import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../../ui/components/Navbar'
import { DcPage, HeroPage, MarvelPage, MhaPage, SearchPage } from '../pages'

const HeroesRoutes = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <div className='mx-20 mt-12 pb-4  h-screen'>

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

    </div>
  )
}

export default HeroesRoutes